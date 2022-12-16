import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../global';

const BackButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          backgroundColor: COLORS.transparentBlack7,
        }}
        onPress={onPress}>
        <Image
          source={icons.back}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.lightGray,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
