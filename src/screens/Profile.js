import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {gstyles} from '../shared/styles';

const Profile = ({navigation}) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableWithoutFeedback>
        <Icon
          name="ellipsis-v"
          size={18}
          color="white"
          style={gstyles.headerBtnRight}
        />
      </TouchableWithoutFeedback>
    ),
  });
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
