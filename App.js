import React from 'react';
import {View, Text} from 'react-native';
import Navigation from './src/navigation/Navigation';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontFamily: 'Roboto-Regular'};

const App = () => {
  return <Navigation />;
};

export default App;
