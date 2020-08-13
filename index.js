import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/redux/reducers/index';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './src/sagas';
import thunk from 'redux-thunk';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk,saga));

saga.run(sagaWatcher);

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