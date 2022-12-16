import React, {useEffect, useState, useRef} from 'react';
import {View, Text, SafeAreaView, Animated} from 'react-native';

import {COLORS, FONTS, SIZES} from '../global';
import {BackButton, CustomInput, MealsCard} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {getMealsInCategory, fetchMeals} from '../redux/MealsInCategorySlice';

const RecipeCategory = ({navigation, route}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [requestStatus, setRequestStatus] = useState(true);
  const meals = useSelector(getMealsInCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    const {category} = route.params;
    setSelectedCategory(category);
    if (requestStatus) {
      dispatch(fetchMeals(category.strCategory));
      setRequestStatus(false);
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 18,
        paddingTop: 30,
      }}>
      <View style={{marginBottom: 20}}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <Animated.FlatList
        data={meals}
        keyExtractor={item => `${item.idMeal}`}
        keyboardDismissMode="on-drag"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.black,
              }}>
              {selectedCategory?.strCategory} Category: {meals.length} Meals
            </Text>
            {/* search */}
            <CustomInput
              placeholder={'Search Meal'}
              customStyle={{paddingHorizontal: 18}}
            />
          </View>
        }
        renderItem={({item}) => (
          <MealsCard
            mealItems={item}
            onPress={() => navigation.navigate('Recipe', {recipe: item})}
          />
        )}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default RecipeCategory;
