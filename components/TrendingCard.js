import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../global';

export const RecipeCardInfo = ({recipeItem}) => {
  return (
    <View style={styles.recipeCardContainer}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              width: '80%',
              color: COLORS.white,
              ...FONTS.h1,
              fontSize: 13,
              lineHeight: 20,
            }}>
            {recipeItem.strMeal}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 20,
          }}>
          <Text
            style={{
              color: COLORS.lightLime,
              ...FONTS.body5,
            }}>
            {recipeItem.tags}
          </Text>
          <Text
            style={{
              color: COLORS.lightLime,
              ...FONTS.body5,
            }}>
            {recipeItem.serving} Serving
          </Text>
        </View>
      </View>
    </View>
  );
};
const TrendingCard = ({containerStyle, recipeItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 270,
        height: 350,
        borderRadius: SIZES.radius,
        marginTop: SIZES.radius,
        marginRight: 20,
        overflow: 'hidden',
        backgroundColor: COLORS.gray,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={{uri: recipeItem.strThumbNail}}
        resizeMode="cover"
        style={{
          width: 270,
          height: 350,
          borderRadius: SIZES.radius,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.dark60,
          borderRadius: SIZES.radius,
        }}>
        <Text style={{color: 'white', ...FONTS.h4}}>{recipeItem.category}</Text>
      </View>

      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,
  },
});

export default TrendingCard;
