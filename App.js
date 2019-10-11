import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Animated,
  Platform,
  NativeModules
} from 'react-native';

const { UIManager } = NativeModules;
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default class App extends React.Component {
  animation = new Animated.Value(0);
  animationSpring = new Animated.Value(1);
  animationSpring2 = new Animated.Value(1);
  animationSpring3 = new Animated.Value(1);

  componentDidMount() {
    Animated.timing(this.animation, {
      duration: 1500,
      toValue: 1
    }).start();

    Animated.spring(this.animationSpring, {
      toValue: 9,
      speed: 0,
      delay: 2000,
      bounciness: 50
    }).start();

    Animated.spring(this.animationSpring2, {
      toValue: 9,
      speed: 0,
      delay: 2500,
      bounciness: 50
    }).start();

    Animated.spring(this.animationSpring3, {
      toValue: 9,
      speed: 0,
      delay: 3100,
      bounciness: 50
    }).start();
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
      >
        <Animated.Image
          style={{
            ...styles.myLogo,
            transform: [
              {
                translateY: this.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.animation
          }}
          source={require('./assets/myshoeLogo.png')}
        />

        <Animated.Image
          style={{
            ...styles.adidasShoe,

            transform: [
              {
                rotate: this.animation.interpolate({
                  inputRange: [0, 3],
                  outputRange: ['0deg', '40deg']
                })
              }
            ]
          }}
          source={require('./assets/images/adidas-kids-grade-school-shoes.png')}
        />
        <Text style={styles.titleText}>Adidas School Kid Shoes</Text>
        <Animated.Text
          style={{
            ...styles.shoePrice,
            left: this.animationSpring
          }}
        >
          $69.99
        </Animated.Text>

        <Animated.Image
          style={{
            ...styles.vansShoe,

            transform: [
              {
                rotate: this.animation.interpolate({
                  inputRange: [0, 3],
                  outputRange: ['0deg', '40deg']
                })
              }
            ]
          }}
          source={require('./assets/images/original-classics-vans.png')}
        />
        <Text style={styles.titleText}>Original Classic Vans</Text>
        <Animated.Text
          style={{ ...styles.shoePrice, left: this.animationSpring2 }}
        >
          $59.99
        </Animated.Text>

        <Animated.Image
          style={{
            ...styles.nikeShoe,

            transform: [
              {
                rotate: this.animation.interpolate({
                  inputRange: [0, 3],
                  outputRange: ['0deg', '40deg']
                })
              }
            ]
          }}
          source={require('./assets/images/nike-free-sneakers-nike-air-max.png')}
        />

        <Text style={styles.titleText}>Nike Air Max</Text>
        <Animated.Text
          style={{ ...styles.shoePrice, left: this.animationSpring3 }}
        >
          $79.99
        </Animated.Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  myLogo: {
    width: 200,
    height: 200,
    marginLeft: 80,
    marginBottom: 5
  },
  adidasShoe: {
    width: 250,
    height: 250,
    marginLeft: 60,
    marginTop: -90,
    marginBottom: -20
  },
  titleText: {
    fontSize: 26,
    textAlign: 'center'
  },
  shoePrice: {
    color: 'red',
    fontWeight: '600',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: -5
  },
  vansShoe: {
    marginLeft: 90,
    width: 250,
    height: 250,
    marginBottom: -20
  },
  nikeShoe: {
    marginLeft: 90,
    width: 250,
    height: 250,
    marginBottom: -20
  }
});
