/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './components';
import { Provider } from 'mobx-react';
import * as Stores from './stores';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.css';

const Root = () => (
    <Provider {...Stores}>
        <Component.Master>

        </Component.Master>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));