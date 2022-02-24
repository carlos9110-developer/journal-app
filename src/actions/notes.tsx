import { db } from '../firebase/firebase-config';
import { loadNotes } from '../helpers/loadNotes';
import { storeInterface } from '../interfaces/storeInterface';
import { actionNotesReducer, notes } from '../reducers/notesReducer';
import { types } from '../types/types';




export const startNewNote = () => {

    return async(dispatch:( action:any ) => void, getState:() => storeInterface) => {

        const uid = getState().auth.uid;

        const newNote:notes= {
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add( newNote );

        newNote.id = docRef.id;

        dispatch( activeNote( newNote ) );

        console.log(docRef);
    
    }

}


export const activeNote = (  note:notes ):actionNotesReducer => ({

    type : types.notesActive,
    payload:{
        note
    }

})

export const startLoadingNotes = (uid:string | undefined) => {

    return async (dispatch: (action:actionNotesReducer) => void) => {

        const notes =  await loadNotes(uid);
        dispatch( setNotes(notes) );

    }

}

export const setNotes = ( notes:notes[] ) => ({
    type: types.notesLoad,
    payload:notes
})

export const startSaveNote = ( note:notes ) => {

    return async ( dispatch:( action:any ) => void, getState:() => storeInterface ) => {

        const  {uid}  = getState().auth;

        const noteFirestore = { ...note };
        delete noteFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFirestore);

        dispatch( refreshNote( note.id, note ) );

    }

}


export const refreshNote = (id:string | undefined, note:notes) => ({

    type: types.notesUpdated,
    payload: {
        id, note
    }

})