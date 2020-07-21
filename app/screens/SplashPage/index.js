/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../../assets/styles/colors';
import ButtonContainer from '../../components/ButtonContainer';

const SplashPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      {/* Image anh Logo */}
      <View style={styles.bigImage}>
        <Image
          source={require('../../assets/images/HomePageImage.png')}
          resizeMode="contain"
          style={styles.homePageImage}
        />
        <Animatable.Image
          animation="rubberBand"
          duration={3000}
          source={require('../../assets/images/Enlavoka.png')}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      {/* Login and registration Button */}
      <View style={styles.buttonContainer}>
        <ButtonContainer
          style={styles.loginButtonContainer}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.loginText}>SIGN IN</Text>
        </ButtonContainer>
        <ButtonContainer
          style={styles.signUpButtonContainer}
          onPress={() => console.log('Registration')}
        >
          <Text style={styles.signUpText}>SIGN UP</Text>
        </ButtonContainer>
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
  logoImage: {
    top: 310,
    left: 49,
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
  homePageImage: {
    top: -20,
    left: 0,
    width: 295,
    height: 315,
    position: 'absolute',
  },
  buttonContainer: {
    top: '5%',
  },
  signUpButtonContainer: {
    left: '17%',
    top: '5%',
    backgroundColor: Colors.white,
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
  signUpText: {
    textAlign: 'center',
    color: Colors.black,
  },
});

export default SplashPage;
