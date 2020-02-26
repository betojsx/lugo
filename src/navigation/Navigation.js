import 'react-native-gesture-handler';
import React from 'react';

import Login from '../screens/Login';
import Home from '../screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {colors} from '../shared/styles';

const Stack = createStackNavigator();

const NavigationOptions = {
  title: 'Login to Lugo',
  headerStyle: {
    shadowOpacity: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    fontSize: 13,
    lineHeight: 15,
    color: colors.dark,
    textTransform: 'uppercase',
  },
  headerLayoutPreset: 'center',
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={NavigationOptions}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
