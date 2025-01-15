import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';

/**
 * This is a workaround to import the default HTML content of the navbar in development mode.
 * We don't want to have this content in the production bundle.
 * So when we build the app, we will replace this import with an empty string.
 */
const navbarDefaultHTML = import.meta.env.DEV ? await import('../mock.html?raw') : { default: '' };

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.DEV && (
      <div className="hidden" dangerouslySetInnerHTML={{ __html: navbarDefaultHTML.default || '' }} />
    )}
    <Navbar />
  </StrictMode>
);
