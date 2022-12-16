import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Animated} from 'react-native';

import {COLORS, FONTS, SIZES} from '../global';
import {BackButton, RecipeHeaderCardInfo} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {getMealRecipe, fetchMealRecipe} from '../redux/MealRecipeSlice';
import {nanoid} from '@reduxjs/toolkit';

const Recipe = ({navigation, route}) => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [requestStatus, setRequestStatus] = useState(true);
  let meal = useSelector(getMealRecipe);

  const dispatch = useDispatch();

  useEffect(() => {
    const {recipe} = route.params;
    setSelectedMeal(recipe);
    if (requestStatus) {
      dispatch(fetchMealRecipe(recipe.idMeal));
      setRequestStatus(false);
    }
  }, []);

  const ScrollY = useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT = 300;

  const renderIngredients = (item, ingredient, flex = 'flex-start') =>
    Object.keys(item)
      .filter(key => key.includes(ingredient))
      .map(key => item[key])
      .filter(item => item != '' && item != ' ')
      .map(item => (
        <View
          style={{
            marginBottom: 20,
            alignItems: flex,
          }}
          key={nanoid()}>
          <Text
            style={{
              ...FONTS.h3,
            }}>
            {item}
          </Text>
        </View>
      ));

  const renderRecipeHeader = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          overflow: 'hidden',
          marginTop: -1000,
          paddingTop: 1000,
        }}>
        <Animated.Image
          source={{uri: meal[0]?.strMealThumb}}
          resizeMode="cover"
          style={{
            height: 300,
            width: '165%',
            transform: [
              {
                translateX: ScrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.2],
                }),
              },
              {
                scale: ScrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
          }}>
          <RecipeHeaderCardInfo recipeItem={meal[0]} largeTitle={true} />
        </Animated.View>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
          zIndex: 10,
        }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <Animated.FlatList
        data={meal}
        keyExtractor={item => `${item.idMeal}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>{renderRecipeHeader()}</View>}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        renderItem={({item}) => (
          <View
            style={{
              margin: SIZES.padding,
            }}>
            {/* Ingredients */}
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.darkLime,
              }}>
              Ingredients
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingVertical: SIZES.h1,
                  paddingHorizontal: SIZES.h1,
                }}>
                <View>{renderIngredients(item, 'strIngredient')}</View>
                <View>{renderIngredients(item, 'strMeasure', 'flex-end')}</View>
              </View>
            </View>
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.h2,
                  paddingBottom: SIZES.radius,
                  color: COLORS.darkLime,
                }}>
                Instructions
              </Text>
              <Text
                style={{
                  ...FONTS.midBody3,
                }}>
                {item.strInstructions}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Recipe;
