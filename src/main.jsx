import { render } from 'preact'
import { App } from './app.jsx'
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyles.js';
import { GlobalProvider } from './context/globalContext.jsx';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <>
        <GlobalStyle />
        <GlobalProvider>
        <App />
        </GlobalProvider>
    </>
);