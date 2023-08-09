import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './app';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);