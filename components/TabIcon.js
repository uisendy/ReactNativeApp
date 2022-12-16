import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../global';

const TabIcon = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 50,
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />
    </View>
  );
};

export default TabIcon;
