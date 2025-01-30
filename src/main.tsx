import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/AppRouter';
import '@styles/global.css'
import { Provider } from 'react-redux';
import { store,persistor } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react'
import '@services/baseUrl'




createRoot(document.getElementById('root')!).render(
    <Provider store={store} children={
     <PersistGate  persistor={persistor} loading={null}>
        <AppRouter/>
        </PersistGate>
}/>
        
)
