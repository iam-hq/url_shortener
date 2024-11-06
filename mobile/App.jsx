import * as React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Text} from 'react-native';
import {store, persistor} from './state/store';
import AppScreen from './components/AppScreen';
import SplashScreen from './SplashScreen';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <AppScreen />
      </PersistGate>
    </Provider>
  );
};
