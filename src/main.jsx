import { render } from 'preact'
import { App } from './app.jsx'
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyles.js';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);