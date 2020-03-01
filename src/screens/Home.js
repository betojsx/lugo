import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableWithoutFeedback} from 'react-native';
import {colors, gstyles} from '../shared/styles';
import Map from '../components/Map';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MyModal from '../components/MyModal';

const Home = props => {
  const [modalVisible, setModalVisible] = useState(false);

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
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('being pressed');
          setModalVisible(!modalVisible);
        }}>
        <Icon
          name="question-circle"
          size={18}
          color="white"
          style={gstyles.headerBtnRight}
        />
      </TouchableWithoutFeedback>
    ),
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Map {...props} />
      <MyModal {...{modalVisible, setModalVisible}} />
    </View>
  );
};

export default Home;
