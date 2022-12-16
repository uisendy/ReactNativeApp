import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../global';

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
        style={{...customStyle}}
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
