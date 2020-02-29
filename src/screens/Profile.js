import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FloatingLabel from '../components/FloatingLabel';
import {gstyles, colors} from '../shared/styles';
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
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.userContainer}>
        <Image source={require('../assets/images/user.jpg')} stye={{flex: 1}} />
        <Text style={styles.userName}>Jacqueline Nelson</Text>
      </View>
      <View style={styles.userRidingInfo}>
        <View style={styles.infoBlock}>
          <Text style={styles.infoBlockTitle}>Total Trips</Text>
          <Text style={styles.infoBlockValue}>21</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoBlockTitle}>Wallet</Text>
          <Text style={styles.infoBlockValue}>$29.14</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoBlockTitle}>Points</Text>
          <Text style={styles.infoBlockValue}>5,291</Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        <FloatingLabel label="your name" text="Jacqueline Nelson" fullWidth />
        <FloatingLabel label="email" text="contact@elitepixels.net" fullWidth />
        <FloatingLabel
          label="phone"
          text="+156 252 512 21"
          extraLabel="Edit"
          fullWidth
        />
        <FloatingLabel
          label="payment method"
          text="Credit Card - x8241"
          extraLabel="Edit"
          fullWidth
        />
        <FloatingLabel
          label="social security"
          text="x9214"
          extraLabel="Edit"
          fullWidth
        />
        <FloatingLabel
          label="password"
          text="12345678"
          extraLabel="Edit"
          secureTextEntry={true}
          fullWidth
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userContainer: {
    flex: 2,
    flexWrap: 'wrap',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    lineHeight: 24,
    marginTop: 10,
    color: colors.dark,
    width: Dimensions.get('screen').width,
    textAlign: 'center',
  },
  userRidingInfo: {
    flex: 2,
    height: 110,
    backgroundColor: 'white',
    borderTopWidth: 1,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoBlock: {
    flex: 1,
  },
  infoBlockTitle: {
    color: colors.dark,
    opacity: 0.5,
    display: 'flex',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
  infoBlockValue: {
    color: colors.dark,
    display: 'flex',
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  userInfo: {
    flex: 3,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
});
