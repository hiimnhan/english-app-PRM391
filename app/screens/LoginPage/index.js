import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
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
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const { signIn } = useContext(AuthContext);

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

  const loginHandle = (username, password) => {
    signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <Image
        source={require('../../assets/images/learning1.png')}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>
      <View style={styles.formContainer}>
        {/* Username */}
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
        {/* Password */}
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
      {/* Button */}
      <View>
        <ButtonContainer
          style={styles.loginButtonContainer}
          onPress={() => loginHandle(data.username, data.password)}
        >
          <Text style={styles.loginText}>LET'S GO!</Text>
        </ButtonContainer>
        <ButtonContainer
          style={styles.signUpButtonContainer}
          onPress={() => navigation.navigate('RegistrationPage')}
        >
          <Text style={styles.signUpText}>Don't have account? Sign up!</Text>
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
  image: {
    top: '-7%',
    left: '-12%',
    width: 500,
    height: 315,
    position: 'absolute',
  },
  icon: {
    width: 20,
    height: 20,
  },
  user: {
    top: '3.5%',
  },
  lock: {
    top: '3.75%',
  },
  tick: {
    top: '30%',
  },
  eye: {
    top: '30%',
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
    paddingHorizontal: 50,
    top: '35%',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
    marginBottom: 30,
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
    top: '500%',
    left: '18%',
    backgroundColor: Colors.pink,
    paddingTop: 12,
  },
  signUpButtonContainer: {
    top: '502%',
    left: '18%',
    backgroundColor: Colors.white,
    borderWidth: 2.5,
    paddingTop: 10,
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

export default index;
