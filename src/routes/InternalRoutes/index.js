import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/InternalScreens/HomeStackScreens/home';
import DetailsScreen from '../../screens/InternalScreens/HomeStackScreens/Details';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  </Stack.Navigator>
);
