import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../shared/styles';

const width = Dimensions.get('screen').width; //full width
const height = Dimensions.get('window').height; //full height

const FloatingLabel = ({
  label,
  extraLabel,
  readOnlyFeature,
  text,
  ...props
}) => {
  let inputRef;
  const containerWidth = props.fullWidth ? width - 40 : width - 80;
  const [value, setValue] = useState(text);
  const [readOnly, setReadOnly] = useState(false);

  const handleOnChange = value => {
    setValue(value);
  };

  useEffect(() => {
    if (readOnly) {
      inputRef.focus();
    }
  }, [readOnly]);

  return (
    <View style={[styles.container, {width: containerWidth}]}>
      <Text style={styles.label}>{label}</Text>
      {readOnlyFeature ? (
        <TextInput
          style={[styles.input, {width: containerWidth}]}
          {...props}
          value={value}
          onChangeText={handleOnChange}
          onBlur={() => {
            setReadOnly(false);
          }}
          ref={ref => {
            inputRef = ref;
          }}
          editable={readOnly}
        />
      ) : (
        <TextInput
          style={[styles.input, {width: containerWidth}]}
          {...props}
          value={value}
          onChangeText={handleOnChange}
        />
      )}
      {extraLabel && (
        <View style={styles.extraLabel}>
          <TouchableWithoutFeedback>
            <Text style={styles.extraLabelText}>{extraLabel}</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
      {extraLabel && readOnlyFeature && (
        <View style={styles.extraLabel}>
          <TouchableNativeFeedback
            onPress={() => {
              setReadOnly(!readOnly);
            }}>
            <Text style={styles.extraLabelText}>{extraLabel}</Text>
          </TouchableNativeFeedback>
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
    right: 0,
    top: 0,

    // maxWidth: 50,
    // width: 50,
  },
  extraLabelText: {
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    lineHeight: 15,
    color: colors.primary,
    padding: 20,
  },
});

export default FloatingLabel;
