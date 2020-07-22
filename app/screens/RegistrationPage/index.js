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
import * as Animatable from 'react-native-animatable';
// import { AuthContext } from '../../components/Context';
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
    check_textInputChange: false,
    secureTextEntry: true,
  });

  // const { signIn } = useContext(AuthContext);

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
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

  const updatesecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signUpHandle = (username, password) => {
    // signIn(username, password);
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
      {/* <View style={styles.formContainer}> */}
      {/* Username */}
      <View style={styles.bodyContainer}>
        <ScrollView
          style={styles.scrollViewContainer}
        >
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
                onChangeText={val => textInputChange(val)}
              />
              {data.check_textInputChange ?
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
                secureTextEntry={data.secureTextEntry}
                onChangeText={val => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updatesecureTextEntry}
              >
                {data.secureTextEntry ?
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
                secureTextEntry={data.secureTextEntry}
                onChangeText={val => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updatesecureTextEntry}
              >
                {data.secureTextEntry ?
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
          {/* First name */}
          <View>
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
                onChangeText={val => textInputChange(val)}
              />
              {data.check_textInputChange ?
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
          {/* Last name */}
          <View>
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
                onChangeText={val => textInputChange(val)}
              />
              {data.check_textInputChange ?
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
        </ScrollView>
      </View>

      {/* </View> */}
      {/* Button */}
      <View style={styles.footerContainer}>
        <ButtonContainer
          style={styles.loginButtonContainer}
          onPress={() => signUpHandle(data.username, data.password)}
        >
          <Text style={styles.loginText}>LET'S GO!</Text>
        </ButtonContainer>
        <ButtonContainer
          style={styles.signUpButtonContainer}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.signUpText}>Turn back to sign in!</Text>
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
    bottom: '1.5%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    paddingHorizontal: '10%',
    paddingBottom: '78%',
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
    top: '30%',
  },
  eye: {
    top: '30%',
  },
  titleText: {
    fontSize: 25,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 50,
    top: '35%',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
    marginBottom: 15,
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
  loginButtonContainer: {
    paddingHorizontal: '25%',
    backgroundColor: Colors.pink,
  },
  signUpButtonContainer: {
    backgroundColor: Colors.white,
    borderWidth: 2.5,
    paddingTop: 10,
    paddingHorizontal: '16.5%'
  },
  loginText: {
    top: '25%',
    color: Colors.white,
  },
  signUpText: {
    color: Colors.black,
  },
});

export default index;