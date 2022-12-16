import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {CustomInput, TextComponent} from '../../components';
import {COLORS, FONTS, SIZES} from '../../global';
import {auth} from '../../firebase';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSaveAuth = () => {
    let success = false;
    if (email && password && confirmPassword && password === confirmPassword) {
      if (emailRegex.test(email)) {
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            const user = userCredential.user;
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });

        success = true;
      } else {
        alert('Bad Email:Provide a valid Email');
        success = false;
      }
    } else {
      alert('Bad Email or Password mismatch');
      success = false;
    }
    return success;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Sign Up</Text>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />

      <CustomInput
        placeholder="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />

      <TextComponent
        contentContainerStyle={styles.containerStyleOne}
        label="Sign Up"
        onPress={() => {
          onSaveAuth();
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

export default SignUp;
