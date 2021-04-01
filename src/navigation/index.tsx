import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {Home, SearchCity} from 'src/screens';

export type RootNavigationParamsList = {
  Home: undefined;
  SearchCity: undefined;
};

enableScreens();

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen
        component={SearchCity}
        name="SearchCity"
        options={{stackPresentation: 'modal'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
