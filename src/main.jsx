import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';
import { SecondApp } from './SecondApp';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp  value={ 0 } />
        { /*<SecondApp title="Hola, Soy Vegeta"/> */}
    </React.StrictMode>
)

