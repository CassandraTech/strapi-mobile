/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Main from './main';
import React from 'react';
import {store} from './src/redux/store';
import { collectionMetadata_get } from './src/redux/actions/collectionMetadata';

store.dispatch(collectionMetadata_get())
const App = props => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
