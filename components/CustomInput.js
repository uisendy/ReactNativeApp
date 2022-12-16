import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../global';
import {BottomTabBarHeightCallbackContext} from '@react-navigation/bottom-tabs';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  customStyle,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{
          color: COLORS.black,
          ...FONTS.body3,
          paddingHorizontal: 15,
          ...customStyle,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.darkLime,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    minWidth: '87%',
  },
});

export default CustomInput;
