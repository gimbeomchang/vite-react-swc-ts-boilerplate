import setupLocatorUI from '@locator/runtime';
import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';

import App from './App.tsx';
import './index.css';

if (import.meta.env.DEV) setupLocatorUI();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
