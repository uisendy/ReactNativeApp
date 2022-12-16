import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {CustomInput, TextComponent} from '../../components';
import {COLORS, FONTS, SIZES} from '../../global';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/AuthenticationSlice';
import {fetchMealCategory} from '../../redux/MealCategorySlice';
import {fetchRandomMeal} from '../../redux/RandomMealSlice';
import {nanoid} from '@reduxjs/toolkit';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSaveAuth = () => {
    if (username && password) {
      dispatch(
        addAuth({
          id: nanoid(),
          username,
          password,
        }),
      );

      setUsername('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome Back</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <TextComponent
        contentContainerStyle={styles.containerStyle}
        label="forgot Password"
        onPress={() => navigation.navigate('Walkthrough')}
        labelStyle={{color: COLORS.black, fontSize: SIZES.h4}}
      />

      <TextComponent
        contentContainerStyle={styles.containerStyleOne}
        label="login"
        onPress={() => {
          onSaveAuth();
          // dispatch(fetchMealCategory());
          // dispatch(fetchRandomMeal());
          navigation.replace('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.height,
  },

  welcome: {
    fontSize: SIZES.h1,
    marginVertical: SIZES.margin,
    ...FONTS.h1,
    color: COLORS.darkGreen,
  },
  containerStyle: {
    backgroundColor: null,
  },
  containerStyleOne: {
    height: 50,
    borderRadius: SIZES.radius,
    paddingHorizontal: 80,
    marginVertical: SIZES.margin,
    backgroundColor: COLORS.darkGreen,
  },
});

export default Login;
