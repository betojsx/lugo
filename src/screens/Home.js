import React from 'react';
import {View, Text, StatusBar, TouchableWithoutFeedback} from 'react-native';
import {colors, gstyles} from '../shared/styles';
import Map from '../components/Map';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Home = props => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Profile')}>
          <Icon
            name="user"
            size={18}
            color="white"
            style={gstyles.headerBtnLeft}
          />
        </TouchableWithoutFeedback>
      ),
      headerRight: () => (
        <TouchableWithoutFeedback>
          <Icon
            name="question-circle"
            size={18}
            color="white"
            style={gstyles.headerBtnRight}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Map {...props} />
    </View>
  );
};

export default Home;
