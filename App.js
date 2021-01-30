/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { persistor, store } from "./app/store/index";
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyApp from "./app/MyApp";



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
      barStyle="light-content"
      hidden = {false}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <PaperProvider>
            <MyApp />
            </PaperProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
};



export default App;
