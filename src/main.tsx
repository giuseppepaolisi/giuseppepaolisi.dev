import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { MDXProvider } from '@mdx-js/react'

import { App } from './App.tsx'

import './assets/styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <MDXProvider>
                <App />
            </MDXProvider>
        </HashRouter>
    </StrictMode>,
)
