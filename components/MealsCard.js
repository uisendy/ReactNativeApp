import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS, SIZES, FONTS} from '../global';

const MealsCard = ({containerStyle, mealItems, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={{uri: mealItems.strMealThumb}}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          paddingHorizontal: 20,
          width: '75%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 100,
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            marginBottom: 20,
          }}>
          {mealItems.strMeal}
        </Text>

        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
          {'Reviews   |   Share'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealsCard;
