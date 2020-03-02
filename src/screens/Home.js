import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {colors, gstyles} from '../shared/styles';
import Map from '../components/Map';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MyModal from '../components/MyModal';
import Explore from '../components/Explore';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
const Home = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const scroll = new Animated.Value(0);
  const scrollListen = new Animated.Value(0);

  props.navigation.setOptions({
    headerLeft: () => (
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('Profile')}>
        <Icon name="user" size={18} color="white" style={gstyles.headerBtn} />
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
          style={gstyles.headerBtn}
        />
      </TouchableWithoutFeedback>
    ),
  });

  return (
    <View style={{...StyleSheet.absoluteFill}}>
      <Animated.ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={true}
        style={{zIndex: 0}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: true,
            listener: event =>
              scrollListen.setValue(event.nativeEvent.contentOffset.y),
          },
        )}>
        <Animated.View
          style={{
            height: screenHeight * 0.7,
            width: '100%',
            transform: [{translateY: Animated.multiply(scroll, 0.8)}],
          }}>
          <Map {...props} />
        </Animated.View>
        <Explore {...{scrollListen}} />
      </Animated.ScrollView>
      <MyModal {...{modalVisible, setModalVisible}} />
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    </View>
  );
};

export default Home;
