import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './context/MovieFetchContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <MovieProvider>
            <App />
        </MovieProvider>
    </BrowserRouter>
)
