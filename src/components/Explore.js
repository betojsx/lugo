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

const Explore = ({scrollListen}) => {
  const MAX_HEIGHT = 400;
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
    if (value >= 278) {
      setInnerScroll(true);
    } else {
      setInnerScroll(false);
    }
  });

  return (
    <ScrollView
      style={{backgroundColor: '#EDEDED', maxHeight: MAX_HEIGHT, zIndex: 3}}
      showsVerticalScrollIndicator={true}
      nestedScrollEnabled={innerScroll}>
      {drawPlaceholders(30)}
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
