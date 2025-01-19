import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/AppRouter';
import '@styleS/global.css'
import { Provider } from 'react-redux';
import { store,persistor } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react'




createRoot(document.getElementById('root')!).render(
    <Provider store={store} children={
     <PersistGate  persistor={persistor} loading={null}>
        <AppRouter/>
        </PersistGate>
}/>
        
)
