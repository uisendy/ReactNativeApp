import {View, Text, Animated, ImageBackground} from 'react-native';
import React, {useRef} from 'react';
import {TextComponent} from '../../components';
import {COLORS, SIZES, FONTS, data} from '../../global';
import LinearGradient from 'react-native-linear-gradient';

const Walkthrough = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {data.walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 7,
                height: 7,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderFooter() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}>
        <Dots />
        <View
          style={{
            flexDirection: 'row',
            height: 55,
          }}>
          <TextComponent
            label="Join Now"
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGrey,
            }}
            labelStyle={{
              color: COLORS.darkGreen,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
          <TextComponent
            label="Login"
            contentContainerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.darkGreen,
            }}
            labelStyle={{
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <Animated.FlatList
        data={data.walkthrough}
        keyExtractor={item => String(item.id)}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
              }}>
              {/* images */}
              <ImageBackground
                source={item.image}
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
                  }}></LinearGradient>
              </ImageBackground>
              {/* Title and Discription */}
              <View
                style={{
                  height: SIZES.height * 0.35,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingHorizontal: SIZES.padding,
                }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.white,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: COLORS.white,
                    ...FONTS.body4,
                  }}>
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default Walkthrough;
