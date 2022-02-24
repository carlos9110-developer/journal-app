import { types } from '../types/types';
import { user } from '../interfaces/user';

export interface actionReducerAuth  {
    payload: user,
    type: string
}



export const authReducer = (  state = {}, action:actionReducerAuth )  => {
    
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName
            }

        case types.logout:
            return { }
    
        default:
            return state;
    }

}