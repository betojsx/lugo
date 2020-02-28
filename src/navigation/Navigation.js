import 'react-native-gesture-handler';
import React from 'react';

import Login from '../screens/Login';
import Home from '../screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {colors} from '../shared/styles';
import Scanner from '../screens/Scanner';

const Stack = createStackNavigator();

const NavigationOptions = {
  global: {
    headerStyle: {
      shadowOpacity: 0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
      backgroundColor: colors.primary,
      height: 60,
    },
    headerTitleStyle: {
      fontFamily: 'Roboto-Bold',
      letterSpacing: 2,
      fontSize: 13,
      lineHeight: 15,
      color: 'white',
      textTransform: 'uppercase',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    ...TransitionPresets.SlideFromRightIOS,
  },
  login: {
    title: 'Login to Lugo',
    headerStyle: {
      shadowOpacity: 0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
      height: 60,
    },
    headerTitleStyle: {
      fontFamily: 'Roboto-Bold',
      letterSpacing: 2,
      fontSize: 13,
      lineHeight: 15,
      color: colors.dark,
      textTransform: 'uppercase',
    },
  },
  home: {
    title: 'Lugo',
  },
  scanner: {
    title: 'Scan QR Code',
  },
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={NavigationOptions.global}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={NavigationOptions.login}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={NavigationOptions.home}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={NavigationOptions.scanner}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
