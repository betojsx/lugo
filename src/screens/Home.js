import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from '../shared/styles';
import Map from '../components/Map';

const Home = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Map {...props} />
    </View>
  );
};

export default Home;
