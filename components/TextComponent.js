import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FONTS, COLORS, SIZES} from '../global/styles';

const TextComponent = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.darkGreen,
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.light, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextComponent;
