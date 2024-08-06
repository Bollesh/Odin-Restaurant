import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import PagesContextProvider from './context/PagesContext'

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);
root.render(
    <React.StrictMode>
        <PagesContextProvider>
            <App />
        </PagesContextProvider>
    </React.StrictMode>
)
