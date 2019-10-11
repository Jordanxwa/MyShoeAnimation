import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
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
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          style={styles.myLogo}
          source={require('./assets/myshoeLogo.png')}
        />

        <Image
          style={styles.adidasShoe}
          source={require('./assets/images/adidas-kids-grade-school-shoes.png')}
        />
        <Text style={styles.titleText}>Adidas School Kid Shoes</Text>
        <Text style={styles.shoePrice}>$69.99</Text>

        <Image
          style={styles.vansShoe}
          source={require('./assets/images/original-classics-vans.png')}
        />
        <Text style={styles.titleText}>Original Classic Vans</Text>
        <Text style={styles.shoePrice}>$59.99</Text>

        <Image
          style={styles.nikeShoe}
          source={require('./assets/images/nike-free-sneakers-nike-air-max.png')}
        />

        <Text style={styles.titleText}>Nike Air Max</Text>
        <Text style={styles.shoePrice}>$79.99</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
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
