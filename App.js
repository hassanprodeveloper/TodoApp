/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import AppDrawer from './src/Navigation/Drawer'
import {Provider} from 'react-redux'
import store from './src/redux/store'
import Navigations from './src/Navigation/Navigations'

const App = () => {
  return (
        <Provider store={store}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <Navigations />
          
        </Provider>
    );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
