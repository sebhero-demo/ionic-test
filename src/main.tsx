import React from 'react';
import ReactDOM from 'react-dom/client';
import { IonApp } from '@ionic/react';
import App from './App';
import './theme/variables.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IonApp>
      <App />
    </IonApp>
  </React.StrictMode>,
);