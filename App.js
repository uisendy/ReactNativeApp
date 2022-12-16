import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import Tabs from './navigation/tab';

import {
  Landing,
  Login,
  SignUp,
  Walkthrough,
  Home,
  Recipe,
  RecipeCategory,
} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Landing'}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Recipe" component={Recipe} />
          <Stack.Screen name="Meals" component={RecipeCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
