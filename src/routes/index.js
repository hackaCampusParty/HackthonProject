import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persist } from '../store';

import AuthRoutes from './AuthRoutes';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
