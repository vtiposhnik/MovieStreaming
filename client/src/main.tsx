import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/MovieFetchContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>
    </BrowserRouter>
)
