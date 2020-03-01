import React from 'react';
import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#6C40BE',
  dark: '#27282B',
  grey: '#D4D4D5',
};

export const gstyles = StyleSheet.create({
  btn: {
    width: 145,
    height: 42,
    backgroundColor: colors.primary,
    borderRadius: 21,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
  },
  btnText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 42,
  },
  headerBtn: {
    color: 'white',
    padding: 20,
  },
});
