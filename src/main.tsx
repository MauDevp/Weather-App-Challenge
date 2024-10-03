import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store/store.ts';
import './index.css'
import './styles/globals.css';
import './styles/variables.css';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
        <App />
    </StrictMode>,
  </Provider>
)
