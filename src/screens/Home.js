import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from '../shared/styles';

const Home = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Text>Hi</Text>
    </View>
  );
};

export default Home;
