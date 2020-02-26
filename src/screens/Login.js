import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {gstyles} from '../shared/styles';
import FloatingLabel from '../components/FloatingLabel';

const Login = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <FloatingLabel label="user id or email" />
      <FloatingLabel
        label="password"
        extraLabel="Forgot?"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={gstyles.btn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={gstyles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 137,
    height: 26,
    marginBottom: 60,
  },
});

export default Login;
