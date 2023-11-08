import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Store from './redux/store';
import { Provider } from 'react-redux';

// Create a root element
const rootElement = document.getElementById('root');

// Render the app using createRoot
createRoot(rootElement).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
