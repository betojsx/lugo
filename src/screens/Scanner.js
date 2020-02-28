import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {white} from 'color-name';

const squareCenter = Math.round(Dimensions.get('screen').width / 2);
const {height, width} = Dimensions.get('screen');
const maskColWidth = Math.round(width / 2);
const Scanner = () => {
  const leftTop = {
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white',
  };
  const leftBottom = {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
  };
  const rightTop = {
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white',
  };
  const rightBottom = {
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
  };
  return (
    <View style={{flex: 1}}>
      <RNCamera style={{...StyleSheet.absoluteFill}} />
      <View
        style={{
          ...StyleSheet.absoluteFill,
          alignItems: 'center',
        }}>
        <View
          style={[
            {flex: 2, marginBottom: -0.5},
            styles.maskRow,
            styles.maskFrame,
          ]}
        />
        <View style={[{flex: 2}, styles.maskCenter]}>
          <View style={[{width: maskColWidth}, styles.maskFrame]} />
          <View
            style={{
              width: squareCenter,
              height: squareCenter - 6,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, ...leftTop}}></View>
              <View style={{flex: 1}}></View>
              <View style={{flex: 1, ...rightTop}}></View>
            </View>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  ...leftBottom,
                }}></View>
              <View style={{flex: 1}}></View>
              <View
                style={{
                  flex: 1,
                  ...rightBottom,
                }}></View>
            </View>
          </View>
          <View style={[{width: maskColWidth}, styles.maskFrame]} />
        </View>
        <View style={[{flex: 2}, styles.maskRow, styles.maskFrame]} />
      </View>
      <Text style={styles.textHint}>
        You can find the QR Code on the handle bar of your bike
      </Text>
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  maskFrame: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {flexDirection: 'row'},
  textHint: {
    position: 'absolute',
    bottom: 35,
    width: squareCenter,
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    fontSize: 12,
    lineHeight: 14,
    padding: 10,
    borderRadius: 20,
  },
});
