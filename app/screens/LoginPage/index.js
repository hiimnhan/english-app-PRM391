/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../assets/styles/colors';
import ButtonContainer from '../../components/ButtonContainer';

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/learning1.png')}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>
      <View style={styles.formContainer}>
        <Text>Username or email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={Colors.black}
            size={20}
          />
        </View>
      </View>
      <ButtonContainer style={styles.loginButtonContainer}>
        <Text style={styles.loginText}>LET'S GO!</Text>
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    top: '-7%',
    left: '-12%',
    width: 500,
    height: 315,
    position: 'absolute',
  },
  titleText: {
    fontSize: 55,
    color: Colors.darkGray,
  },
  titleContainer: {
    top: '30%',
    left: '32%',
  },
  formContainer: {

  },
  loginButtonContainer: {
    top: '1000%',
    left: '18%',
    backgroundColor: Colors.pink,
    paddingTop: 12,
  },
  loginText: {
    textAlign: 'center',
    color: Colors.white,
  },
});

export default index;
