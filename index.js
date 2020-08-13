import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

export default class ReduxCounter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider >
    );
  }
}
AppRegistry.registerComponent('main', () => ReduxCounter);