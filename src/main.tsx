import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/AppRouter';
import '@styleS/global.css'
import { Provider } from 'react-redux';
import { store } from '@store/store';



createRoot(document.getElementById('root')!).render(
    <Provider store={store} children={<AppRouter/>}/>
        
)
