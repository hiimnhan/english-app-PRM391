import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Colors from '../../assets/styles/colors';
import ButtonPattern from '../../components/ButtonContainer';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigImage}>
        <Image
          source={require('../../assets/images/HomePageImage.png')}
          resizeMode="contain"
          style={styles.homePageImage}
        />
        <View style={styles.logoImage}>
          <Image
            source={require('../../assets/images/Enlavoka.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPattern style={styles.loginButtonContainer}>
          <Text style={styles.loginText}>LOGIN</Text>
        </ButtonPattern>
        <ButtonPattern style={styles.registrationButtonContainer}>
          <Text style={styles.registrationText}>REGISTRATION</Text>
        </ButtonPattern>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  image: {
    top: 0,
    left: 0,
    width: 196,
    height: 188,
    position: 'absolute',
  },
  bigImage: {
    width: 10,
    height: 492,
    marginTop: 34,
    marginLeft: 60,
  },
  logoImage: {
    top: 304,
    left: 49,
    width: 196,
    height: 188,
    position: 'absolute',
  },
  homePageImage: {
    top: 0,
    left: 0,
    width: 295,
    height: 315,
    position: 'absolute',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  registrationButtonContainer: {
    left: '17%',
    top: '5%',
    backgroundColor: Colors.grayText,
    borderWidth: 2.5,
    paddingTop: 10,
  },
  loginButtonContainer: {
    left: '17%',
    top: '5%',
    backgroundColor: Colors.pink,
    paddingTop: 12,
  },
  loginText: {
    textAlign: 'center',
    color: Colors.white,
  },
  registrationText: {
    textAlign: 'center',
    color: Colors.black,
  },
});

export default HomePage;
