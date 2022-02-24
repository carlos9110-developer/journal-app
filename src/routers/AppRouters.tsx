import { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config';
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {  startLoadingNotes } from '../actions/notes';


export const AppRouters = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /*
    let myHeaders = new Headers();

    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log("datos retornados",json));

    const getImagen = async() => {

        try {
            // con el await ya no seria una promesa es decir no seria algo asincrono si no que el codigo espera a que esto se ejecute para continuar
            // la condición para trabajar con await es que vaya dentro de una función async
            const resp      =   await fetch('https://jsonplaceholder.typicode.com/posts'); 
            const data      =   await resp.json();
    
            console.log("data 2",data);
            
        } catch (error) {
            console.log("error en la petición", error);
        }
    }
    
    getImagen();
    */


    useEffect(() => {

        firebase.auth().onAuthStateChanged(  (user) =>  {

            if( user?.uid ){
                dispatch( login(  user.uid, user.displayName  ) );
                setIsLoggedIn(true);
                dispatch( startLoadingNotes(user.uid) );

                
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);


        } );
      
    }, [dispatch, setChecking])

    if( checking ){
        return (
            <h1>Espere....</h1>
        )
    }
    

    return (
        <HashRouter>
        
            <Routes>

                <Route path="auth/*"  element={ 
                    
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <AuthRouter /> 
                    </PublicRoute>
                } 
                

                />
                
                <Route path='/'   element={

                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <JournalScreen /> 
                    </PrivateRoute>

                }  
                />

                <Route path="*" element={<AuthRouter />} />


            </Routes>

        </HashRouter>
    )
}
