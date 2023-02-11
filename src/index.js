import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StaticTableProvider } from './context/StaticTableContext';
import { HorodatedTableProvider } from './context/HorodatedTableContext';
import { HorodatedLineProvider } from './context/HorodateLineContext';
import { StaticLineProvider } from './context/StaticLineContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StaticTableProvider>
     <HorodatedTableProvider>
     <HorodatedLineProvider>
      <StaticLineProvider>




    <App />
      </StaticLineProvider>
     </HorodatedLineProvider>
     </HorodatedTableProvider>
    </StaticTableProvider>
  </React.StrictMode>
);
