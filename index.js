/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Context} from './src/context';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';

const mainApp = () => (
  <Context>
    <App />
  </Context>
);

YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => mainApp);
