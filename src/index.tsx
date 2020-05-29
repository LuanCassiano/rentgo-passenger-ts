import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

import App from './App';

const Root: React.FC = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#1c2331" />
            <App />
        </Provider>
    );
};

export default Root;
