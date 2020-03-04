import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import {colors, gstyles} from '../shared/styles';

const MAX_HEIGHT = Dimensions.get('screen').height * 0.7;
console.log(MAX_HEIGHT);
const LIMIT = MAX_HEIGHT - 73;
const Explore = ({scrollListen}) => {
  const drawPlaceholders = amount => {
    var placeholder_arr = [];
    for (var i = 0; i < amount; i++) {
      placeholder_arr.push(
        <Placeholder
          key={i}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>,
      );
    }
    return placeholder_arr;
  };

  const [innerScroll, setInnerScroll] = useState(false);

  scrollListen.addListener(({value}) => {
    console.log(value, LIMIT);
    if (value >= LIMIT) {
      setInnerScroll(true);
    } else {
      setInnerScroll(false);
    }
  });

  return (
    <ScrollView
      style={styles.explorer}
      showsVerticalScrollIndicator={true}
      nestedScrollEnabled={innerScroll}>
      <View style={styles.marker}></View>
      <Text style={styles.labelSmall}>Your last trip</Text>
      <View style={[styles.row, {marginVertical: 30}]}>
        <Text style={styles.title}>Trip cost</Text>
        <Text style={[styles.title, {color: colors.primary}]}>$21.99</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Ride Time Cost</Text>
        <Text style={styles.label}>$12</Text>
      </View>
      <View style={[styles.row, {marginBottom: 30}]}>
        <Text style={styles.label}>Distance Cost</Text>
        <Text style={styles.label}>$9.99</Text>
      </View>
      <TouchableOpacity style={[gstyles.btn, {alignSelf: 'center'}]}>
        <Text style={gstyles.btnText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explorer: {
    backgroundColor: 'white',
    maxHeight: MAX_HEIGHT,
    minHeight: 80,
    zIndex: 5,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      height: -10,
    },
    shadowRadius: 100,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  marker: {
    alignSelf: 'center',
    width: 30,
    height: 4,
    backgroundColor: colors.dark,
    opacity: 0.2,
    borderRadius: 4,
    marginBottom: 15,
  },
  labelSmall: {
    fontSize: 12,
    color: colors.dark,
    opacity: 0.5,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  label: {
    fontSize: 12,
    color: colors.dark,
    opacity: 0.5,
    fontFamily: 'Roboto-Medium',
  },
  title: {
    fontSize: 20,
    color: colors.dark,
    fontFamily: 'Roboto-Bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
