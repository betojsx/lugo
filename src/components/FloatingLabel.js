import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from '../shared/styles';

const width = Dimensions.get('screen').width; //full width
const height = Dimensions.get('window').height; //full height

const FloatingLabel = ({label, extraLabel, text, ...props}) => {
  const containerWidth = props.fullWidth ? width - 40 : width - 80;
  const [value, setValue] = useState(text);

  const handleOnChange = value => {
    setValue(value);
  };

  return (
    <View style={[styles.container, {width: containerWidth}]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, {width: containerWidth}]}
        {...props}
        value={value}
        onChangeText={handleOnChange}
      />
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
    position: 'relative',
  },
  label: {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 1,
    color: colors.dark,
    opacity: 0.6,
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E7E7E7',
    paddingHorizontal: 20,
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 15,
    color: colors.dark,
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
