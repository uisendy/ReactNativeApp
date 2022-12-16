import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES, COLORS, FONTS} from '../global';

const RecipeHeaderCardInfo = ({recipeItem}) => {
  console.log(recipeItem);
  return (
    <View style={styles.recipeCardContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
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
              ...FONTS.h3,
            }}>
            {recipeItem.strMeal}
          </Text>
        </View>

        <View
          style={{
            borderRadius: 50,
            borderColor: COLORS.white,
            borderWidth: 1,
            height: 60,
            width: 60,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: recipeItem.strMealThumb}}
            resizeMode="contain"
            style={{
              height: 60,
              width: 60,
            }}
          />
        </View>
      </View>
    </View>
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

export default RecipeHeaderCardInfo;
