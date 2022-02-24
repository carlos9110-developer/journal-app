import { types } from '../types/types';
import { uiError } from '../interfaces/uiError';


const initialState:uiError = {
    loading: false,
    msgError: null
}

export interface actionReducerUI  {
    payload: uiError,
    type: string
}


export const uiReducer = ( state= initialState, action:actionReducerUI) => {

    switch (action.type) {
        case types.uisetError:
            return {
                ...state,
                msgError: action.payload.msgError
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case types.uiStartLoading:
            console.log("types.uiStartLoading")
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }

}