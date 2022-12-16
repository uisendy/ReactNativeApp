import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS, SIZES, FONTS} from '../global';

const CategoryCard = ({containerStyle, categoryItem, onPress}) => {
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
        source={{uri: categoryItem.strCategoryThumb}}
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
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            marginBottom: 20,
          }}>
          {categoryItem.strCategory}
        </Text>

        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
          {/* {categoryItem.duration} | {categoryItem.serving} Serving */}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
