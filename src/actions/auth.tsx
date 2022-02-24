import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { actionReducerAuth } from '../reducers/authReducer';
import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';
import Swal from 'sweetalert2'

export const startRegisterWithEmailPasswordName = (email:string, password:string, name:string) => {

    return (dispatch:any) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user}) => {

                await user?.updateProfile( {displayName:name} );

                console.log(user);

                dispatch(login(  user?.uid, user?.displayName ))
            })
            .catch( e =>  {
                console.log("error ",e);
                Swal.fire('Error', e.message, 'error');
            })
    }

}

// como este es asincrono el return es un callback que llama a otra función, actuando como un middleware
export const startLoginEmailPassword = ( email:string, password:string ) => {

    return (dispatch:any) => {

        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                console.log("login usuario", user);
                dispatch(login(  user?.uid, user?.displayName ));

                dispatch( finishLoading() );
            })
            .catch( e =>  {
                console.log("error ",e);
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            })

    }

}

export const startGoogleLogin = () => {

    return (  dispatch:any ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
               dispatch(login(  user?.uid, user?.displayName ))
            })
    }

}

export const startLogout = () => {

    return async( dispatch:any ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }

}

export const logout = () => ({
    type: types.logout
})


export const login = (uid:string | undefined, displayName:string | null | undefined):actionReducerAuth => ({

    type: types.login,
    payload: {
        uid: uid,
        displayName: displayName
    }
    
})