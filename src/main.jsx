import React from 'react';
import ReactDOM from 'react-dom/client';

import { Counter } from './CounterApp';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Counter  value={ 0 } />
    </React.StrictMode>
)