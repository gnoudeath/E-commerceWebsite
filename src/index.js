import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, Router, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />
);


