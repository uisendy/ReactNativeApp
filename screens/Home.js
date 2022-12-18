import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  dummyData,
  recentRecipeData,
} from '../global';
import {CategoryCard, CustomInput, TrendingCard} from '../components';
import {
  getMealCategory,
  getError,
  getStatus,
  fetchMealCategory,
} from '../redux/MealCategorySlice';
import {useDispatch, useSelector} from 'react-redux';
import {getRandomMeal} from '../redux/RandomMealSlice';

function renderCategoryHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.black,
        }}>
        Categories
      </Text>

      <TouchableOpacity
        style={{
          ...FONTS.h2,
        }}>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body4,
            marginRight: 20,
          }}>
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function renderCategoryList(navigation, mealCategories) {
  return (
    <View
      style={{
        marginTop: 10,
      }}>
      <FlatList
        data={mealCategories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.idCategory}`}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginRight: 10,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 5,
                backgroundColor: COLORS.darkLime,
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.navigate('Meals', {category: item})}>
              <Text style={{color: 'white', ...FONTS.h4}}>
                {item.strCategory}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
function renderTrend(navigation) {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
      }}>
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.gray,
        }}>
        Recent Recipe
      </Text>

      <FlatList
        data={recentRecipeData.recentRecipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.idMeal}`}
        renderItem={({item, index}) => {
          return (
            <TrendingCard
              recipeItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
      />
    </View>
  );
}

const Home = ({navigation}) => {
  const mealCategories = useSelector(getMealCategory);
  const [requestStatus, setRequestStatus] = useState(true);
  const status = useSelector(getStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (requestStatus) {
      dispatch(fetchMealCategory());
      setRequestStatus(false);
    }
  }, []);

  let show;

  if (status == 'loading') {
    show = (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  } else if (status == 'succeeded' || status == 'idle') {
    show = (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          paddingLeft: 18,
        }}>
        <FlatList
          data={mealCategories}
          keyExtractor={item => `${item.idCategory}`}
          keyboardDismissMode="on-drag"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                }}>
                Find Best recipe for Cooking
              </Text>
              {/* search */}
              <CustomInput
                placeholder={'Search Meal'}
                customStyle={{marginRight: 18}}
              />
              {/* categoryHeader */}
              {renderCategoryHeader()}

              {/* categoryHeader */}
              {renderCategoryList(navigation, mealCategories)}

              {/* trendingSection */}
              {renderTrend(navigation)}
              <Text
                style={{
                  marginTop: SIZES.padding,
                  ...FONTS.h3,
                  color: COLORS.darkGreen,
                }}>
                Showing All {mealCategories.length} Categories
              </Text>
            </View>
          }
          renderItem={({item}) => (
            <CategoryCard
              categoryItem={item}
              containerStyle={{marginRight: 18}}
              onPress={() => navigation.navigate('Meals', {category: item})}
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
  } else if (status == 'failed') {
    show = (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Check Internet Connection</Text>
      </View>
    );
  }

  return show;
};

export default Home;
