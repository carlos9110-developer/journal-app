import { types } from '../types/types';
/*
    {
        notes:[],
        active:null,
        active{
            id: 8718181,
            title: '',
            body: '',
            imageUrl: '',
            date: 1212121212
        }
    }

*/

export interface notes {
    id?: string,
    title: string,
    body: string,
    imageUrl?: string,
    date: number
}

export interface notesReducer{
    notes:notes[],
    active: notes | null
}


const initialState = {
    notes:[],
    active: null
}

export interface actionNotesReducer  {
    payload: any,
    type: string
}


export const notesReducer = (  state:notesReducer = initialState, action:actionNotesReducer  )  => {


    switch( action.type ){

        case types.notesActive:

            return {
                ...state,
                active:{
                    ...action.payload
                }
            }

        case types.notesLoad:

            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdated:

            console.log("estebebe ", action)
            return {
                ...state,
                
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload.note
                    : note
                )

            }


        default:
            return state;
    }

}
