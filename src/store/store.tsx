import {  applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';


// esta es la forma que se utiliza para enviar varios reducers, al createStore
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// el segundo argumento recibe la configuración para ver las herramientas de desarrollo de redux en el navegador
export const store  =   createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
); // createStore solo recibe un reducer