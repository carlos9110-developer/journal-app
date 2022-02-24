

import { actionReducerUI } from '../reducers/uiReducer';
import { types } from '../types/types';



// como este es sincrono lo puedo retornar de una vez
export const setError = ( error:string ) => ({

    type:types.uisetError,
    payload: {
        msgError: error,
    }
})


export const removeError = () => ({

    type:types.uiRemoveError,
    payload: {
        msgError: null,
    }
})

export const startLoading = () => ({

    type:types.uiStartLoading
})

export const finishLoading  = () => ({

    type:types.uiFinishLoading
})

