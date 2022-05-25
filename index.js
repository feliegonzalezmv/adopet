/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Context} from './src/context';
import {name as appName} from './app.json';

const mainApp = () => (
  <Context>
    <App />
  </Context>
);

AppRegistry.registerComponent(appName, () => mainApp);
