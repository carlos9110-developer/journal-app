import { user } from "./user";
import { uiError } from './uiError';
import { notesReducer } from "../reducers/notesReducer";

export interface storeInterface {
    auth: user,
    ui: uiError,
    notes:notesReducer
}