import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomInput, TextComponent} from '../../components';
import {COLORS, FONTS, SIZES} from '../../global';
import {useDispatch, useSelector} from 'react-redux';
import {selectAllAuth} from '../../redux/AuthenticationSlice';
import {auth} from '../../firebase';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signUp = useSelector(selectAllAuth);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });

    return unsubscribe;
  }, []);

  const onSaveAuth = () => {
    let login = false;
    if (email && password) {
      if (emailRegex.test(email)) {
        setEmail('');
        setPassword('');

        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredential => {
            const user = userCredential.user;
            if (user) {
              return (login = true);
            }
          })
          .catch(error => {
            alert(error.message);
          });
      } else {
        alert('Bad Email:Check your email Address and Try again');
        login = false;
      }
    } else {
      alert('Please Provide Email and Password');
      login = false;
    }
    return login;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome Back</Text>
      <CustomInput
        placeholder="abc@email.xyz"
        value={email}
        setValue={setEmail}
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
          onSaveAuth() && navigation.replace('Home');
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
