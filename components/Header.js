import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {COLORS, SIZES} from '../global/styles';

const Header = () => {
  return (
    <View style={styles}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: SIZES.header,
  },
});

export default Header;
