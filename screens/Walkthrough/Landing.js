import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {TextComponent} from '../../components';
import {COLORS, FONTS, SIZES, images} from '../../global';
import LinearGradient from 'react-native-linear-gradient';

const Landing = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '70%' : '60%',
          paddingBottom: SIZES.largeTitle,
        }}>
        <ImageBackground
          source={images.loginBackground2}
          style={{flex: 1, justifyContent: 'flex-end'}}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                paddingHorizontal: SIZES.padding,
              }}>
              <Text
                style={{
                  color: COLORS.light,
                  textAlign: 'center',
                  fontSize: SIZES.h1,
                  textShadowColor: COLORS.black,
                }}>
                Cooking Experience
              </Text>
              <Text
                style={{
                  color: COLORS.light,
                  textAlign: 'center',
                  fontSize: SIZES.largeTitle,
                  paddingBottom: SIZES.h2,
                }}>
                Like a Chef
              </Text>
              <Text
                style={{
                  color: COLORS.light,
                  textAlign: 'center',
                  fontSize: SIZES.h5,
                }}>
                Lets make a delicious with the best recipe for friends and
                family
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
  return (
    <View style={styles.header}>
      {renderHeader()}
      <View style={styles.footer}>
        <TextComponent
          contentContainerStyle={styles.containerStyleOne}
          label="Get Started"
          onPress={() => navigation.navigate('Walkthrough')}
        />

        <TextComponent
          contentContainerStyle={styles.containerStyleTwo}
          label="Already have an account"
          labelStyle={{
            color: COLORS.white,
          }}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  sub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },

  welcome: {marginTop: SIZES.padding, ...FONTS.h1},
  sendy: {marginTop: SIZES.base, ...FONTS.h1},
  footer: {
    paddingHorizontal: SIZES.padding,
    marginBottom: 20,
  },
  containerStyleOne: {
    height: 50,
    borderRadius: SIZES.radius,
  },

  containerStyleTwo: {
    height: 50,
    marginTop: SIZES.base,
    backgroundColor: null,
  },
});

export default Landing;
