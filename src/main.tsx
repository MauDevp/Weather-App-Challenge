import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store/store.ts'; // Asegúrate de que la ruta sea correct
import './index.css'
import './styles/globals.css';
import './styles/variables.css';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)
