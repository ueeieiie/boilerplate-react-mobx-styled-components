// React's
import React from 'react';
import ReactDOM from 'react-dom';

// Mobx-react's
import { Provider } from 'mobx-react';

// Stores
import { store } from './stores/store';

// App main Component
import App from './components/app/app';

// App location in DOM
const appLocation = document.querySelector('#reactApp');

// Render app to DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appLocation
);