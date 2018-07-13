// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

import Instagram from './pages/instagram.js';
const start = (
    <h1
        style = { {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            minHeight:       '100vh',
            backgroundColor: '#070A13',
            color:           'white',
            fontSize:        24,
            fontWeight:      '600',
        } }>
        Добро пожаловать на воркшоп по React.
    </h1>
);

ReactDOM.render(<Instagram />,
    document.getElementById('app')
);
