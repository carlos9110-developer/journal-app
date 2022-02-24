import { store } from './store/store';
import { AppRouters } from './routers/AppRouters';
import { Provider } from 'react-redux' 


export const  JournalApp = () => {
    return (

        <Provider store={store} >

            <AppRouters />

        </Provider>

        

    )
}
