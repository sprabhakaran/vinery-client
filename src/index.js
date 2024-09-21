import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';




import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
// );

hydrateRoot(document.getElementById('root'), <App />);


