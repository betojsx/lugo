import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

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
      {drawPlaceholders(30)}
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explorer: {
    backgroundColor: 'white',
    maxHeight: MAX_HEIGHT,
    zIndex: 5,
    padding: 20,
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
});
