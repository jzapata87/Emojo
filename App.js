/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import  AppNavigator, {AuthStack}  from './src/routes/AppNavigator'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import watchFetchData from './src/sagas/index'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(watchFetchData)


const Root = createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
