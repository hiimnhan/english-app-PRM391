import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../components/Context';
import User from '../../assets/icons/user.png';
import Tick from '../../assets/icons/tick.png';
import Lock from '../../assets/icons/padlock.png';
import VisibleEye from '../../assets/icons/visible-eye.png';
import HiddenEye from '../../assets/icons/hidden-eye.png';
import Colors from '../../assets/styles/colors';
import ButtonContainer from '../../components/ButtonContainer';

const index = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    confirmpassword: '',
    check_textUsernameChange: false,
    check_textFirstnameChange: false,
    check_textLastnameChange: false,
    securePasswordEntry: true,
    secureConfirmPasswordEntry: true,
  });

  const { signUp } = useContext(AuthContext);

  const textUsernameChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textUsernameChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textUsernameChange: false,
      });
    }
  };

  const textFirstnameChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        firstname: val,
        check_textFirstnameChange: true,
      });
    } else {
      setData({
        ...data,
        firstname: val,
        check_textFirstnameChange: false,
      });
    }
  };

  const textLastnameChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        lastname: val,
        check_textLastnameChange: true,
      });
    } else {
      setData({
        ...data,
        lastname: val,
        check_textLastnameChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        password: val,
      });
    } else {
      setData({
        ...data,
        password: val,
      });
    }
  };

  const handleConfirmPasswordChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        confirmpassword: val,
      });
    } else {
      setData({
        ...data,
        confirmpassword: val,
      });
    }
  };

  const updatesecurePasswordEntry = () => {
    setData({
      ...data,
      securePasswordEntry: !data.securePasswordEntry,
    });
  };

  const updatesecureConfirmPasswordEntry = () => {
    setData({
      ...data,
      secureConfirmPasswordEntry: !data.secureConfirmPasswordEntry,
    });
  };

  const signUpHandle = (userName, passWord, confirmpassword, firstname, lastname) => {
    if (userName !== null &&
      passWord !== null &&
      confirmpassword !== null &&
      firstname !== null &&
      lastname !== null) {
      axios.post('http://10.0.2.2:8090/rest-api/user/register', {
        confirmPassword: confirmpassword,
        email: '',
        firstName: firstname,
        lastName: lastname,
        password: passWord,
        username: userName,
      })
        .then(response => {
          signUp(response.data.status, null);
          console.log('response.data RegistrationPage :>> ', response.data.status);
        })
        .catch(e => {
          console.log('signUp api error: ', e);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <StatusBar
          barStyle="light-content"
        />
        <Image
          source={require('../../assets/images/learning2.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>REGISTRATION</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView
          style={styles.scrollViewContainer}
        >
          {/* Username */}
          <View>
            <Text style={styles.formText}>Username</Text>
            <View style={styles.action}>
              <Image
                style={{ ...styles.icon, ...styles.user }}
                source={User}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your username"
                autoCorrect={false}
                onChangeText={val => textUsernameChange(val)}
              />
              {data.check_textUsernameChange ?
                <Animatable.View
                  animation="bounceIn"
                  duration={1500}
                >
                  <Image
                    style={{ ...styles.icon, ...styles.tick }}
                    source={Tick}
                  />
                </Animatable.View>
                :
                <Animatable.View
                  animation="bounceOut"
                  duration={500}
                >
                  <Image
                    style={{ ...styles.icon, ...styles.tick }}
                    source={Tick}
                  />
                </Animatable.View>}
            </View>
          </View>
          {/* Password */}
          <View>
            <Text style={styles.formText}>Password</Text>
            <View style={styles.action}>
              <Image
                style={{ ...styles.icon, ...styles.lock }}
                source={Lock}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your password"
                autoCorrect={false}
                secureTextEntry={data.securePasswordEntry}
                onChangeText={val => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updatesecurePasswordEntry}
              >
                {data.securePasswordEntry ?
                  <Image
                    style={{ ...styles.icon, ...styles.eye }}
                    source={HiddenEye}
                  /> :
                  <Image
                    style={{ ...styles.icon, ...styles.eye }}
                    source={VisibleEye}
                  />}
              </TouchableOpacity>
            </View>
          </View>
          {/* Confirm password */}
          <View>
            <Text style={styles.formText}>Confirm password</Text>
            <View style={styles.action}>
              <Image
                style={{ ...styles.icon, ...styles.lock }}
                source={Lock}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Confirm your password"
                autoCorrect={false}
                secureTextEntry={data.secureConfirmPasswordEntry}
                onChangeText={val => handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updatesecureConfirmPasswordEntry}
              >
                {data.secureConfirmPasswordEntry ?
                  <Image
                    style={{ ...styles.icon, ...styles.eye }}
                    source={HiddenEye}
                  /> :
                  <Image
                    style={{ ...styles.icon, ...styles.eye }}
                    source={VisibleEye}
                  />}
              </TouchableOpacity>
            </View>
          </View>
          {/* Name */}
          <View style={styles.fullNameContainer}>
            {/* First name */}
            <View style={styles.firstNameContainer}>
              <Text style={styles.formText}>First name</Text>
              <View style={styles.action}>
                <Image
                  style={{ ...styles.icon, ...styles.user }}
                  source={User}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Your firstname"
                  autoCorrect={false}
                  onChangeText={val => textFirstnameChange(val)}
                />
                {data.check_textFirstnameChange ?
                  <Animatable.View
                    animation="bounceIn"
                    duration={1500}
                  >
                    <Image
                      style={{ ...styles.icon, ...styles.tick }}
                      source={Tick}
                    />
                  </Animatable.View>
                  :
                  <Animatable.View
                    animation="bounceOut"
                    duration={500}
                  >
                    <Image
                      style={{ ...styles.icon, ...styles.tick }}
                      source={Tick}
                    />
                  </Animatable.View>}
              </View>
            </View>
            {/* Space */}
            <View style={styles.spaceContainer} />
            {/* Last name */}
            <View style={styles.lastNameContainer}>
              <Text style={styles.formText}>Last name</Text>
              <View style={styles.action}>
                <Image
                  style={{ ...styles.icon, ...styles.user }}
                  source={User}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Your lastname"
                  autoCorrect={false}
                  onChangeText={val => textLastnameChange(val)}
                />
                {data.check_textLastnameChange ?
                  <Animatable.View
                    animation="bounceIn"
                    duration={1500}
                  >
                    <Image
                      style={{ ...styles.icon, ...styles.tick }}
                      source={Tick}
                    />
                  </Animatable.View>
                  :
                  <Animatable.View
                    animation="bounceOut"
                    duration={500}
                  >
                    <Image
                      style={{ ...styles.icon, ...styles.tick }}
                      source={Tick}
                    />
                  </Animatable.View>}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Button */}
      <View style={styles.footerContainer}>
        <ButtonContainer
          style={styles.signUpButtonContainer}
          onPress={() => signUpHandle(
            data.username,
            data.password,
            data.confirmpassword,
            data.firstname,
            data.lastname
          )}
        >
          <Text style={styles.signUpText}>LET'S GO!</Text>
        </ButtonContainer>
        <ButtonContainer
          style={styles.loginButtonContainer}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.loginText}>Turn back to sign in!</Text>
        </ButtonContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 3,
  },
  titleContainer: {
    flex: 1,
    paddingTop: '20%',
  },
  bodyContainer: {
    flex: 8,
  },
  footerContainer: {
    bottom: '5%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    paddingHorizontal: '10%',
    paddingBottom: '78%',
  },
  fullNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstNameContainer: {
    flex: 10,
  },
  spaceContainer: {
    flex: 1,
  },
  lastNameContainer: {
    flex: 10,
  },
  image: {
    top: '-3%',
    left: '11%',
    width: 320,
    height: 215,
    position: 'absolute',
  },
  icon: {
    width: 20,
    height: 20,
  },
  user: {
    top: '1.5%',
  },
  lock: {
    top: '1.5%',
  },
  tick: {
    top: '15%',
  },
  eye: {
    top: '20%',
  },
  titleText: {
    fontSize: 30,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 50,
    top: '35%',
  },
  action: {
    flexDirection: 'row',
    marginTop: 7,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 18,
    color: Colors.black,
  },
  formText: {
    fontSize: 14,
  },
  signUpButtonContainer: {
    paddingHorizontal: '25%',
    backgroundColor: Colors.pink,
  },
  loginButtonContainer: {
    backgroundColor: Colors.white,
    borderWidth: 2.5,
    paddingTop: '2.25%',
    paddingHorizontal: '16.5%'
  },
  signUpText: {
    top: '25%',
    color: Colors.white,
  },
  loginText: {
    color: Colors.black,
  },
});

export default index;
