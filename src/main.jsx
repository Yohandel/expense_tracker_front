import { render } from 'preact'
import { App } from './app.jsx'
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyles.jsx';
import { GlobalProvider } from './context/globalContext.jsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <GlobalStyle />
        <GlobalProvider>
        <App />
        </GlobalProvider>
    </BrowserRouter>
);