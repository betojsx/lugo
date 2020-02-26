import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from '../shared/styles';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const FloatingLabel = ({label, extraLabel, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
      {extraLabel && (
        <View style={styles.extraLabel}>
          <TouchableWithoutFeedback>
            <Text style={styles.extraLabelText}>{extraLabel}</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    width: width - 80,
  },
  label: {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 1,
    color: colors.dark,
    position: 'absolute',
    left: 10,
    top: -6,
    zIndex: 1,
    textTransform: 'uppercase',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 54,
    width: width - 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E7E7E7',
    paddingHorizontal: 14,
  },
  extraLabel: {
    position: 'absolute',
    right: 10,
    top: 20,
    maxWidth: 50,
    width: 50,
  },
  extraLabelText: {
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    lineHeight: 15,
    color: colors.primary,
  },
});

export default FloatingLabel;
