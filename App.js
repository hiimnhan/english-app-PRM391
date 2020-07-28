/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useMemo, useReducer } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from './app/components/Context';
import DrawerContent from './app/components/DrawerContent';
import Colors from './app/assets/styles/colors';
import Screen1 from './app/screens/draft/Screen1';
import Screen2 from './app/screens/draft/Screen2';
import Topic from './app/screens/Topic';
import TopicStackScreen from './app/screens/stacks/TopicStackScreen';
import Loading from './app/components/shared/Loading';
import LevelPage from './app/screens/LevelPage';
import LoginPage from './app/screens/LoginPage';
import RegistrationPage from './app/screens/RegistrationPage';
import ProgressBar from './app/components/ProgressBar';
import VocabularyScreen from './app/screens/VocabularyScreen';
import SplashPage from './app/screens/SplashPage';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    userId: '',
    chosenLevelId: null,
    status: '',
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          chosenLevelId: action.levelId,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userId: action.id,
          userToken: action.token,
          chosenLevelId: action.chosenLevelId,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userId: '',
          userToken: null,
          chosenLevelId: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          chosenLevelId: action.chosenLevelId,
          status: action.status,
          isLoading: false,
        };
      case 'SET_LEVEL':
        return {
          ...prevState,
          chosenLevelId: action.chosenLevelId,
        };
      default:
        break;
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // Create function to execute in other components.
  const authConText = useMemo(() => ({
    setLevelId: async (levelId) => {
      try {
        await AsyncStorage.setItem('chosenLevelId', levelId);
      } catch (error) {
        console.log('-------------------------------');
        console.log('setLevelId asyncstorage error: ', error);
        console.log('-------------------------------');
      }
      dispatch({
        type: 'SET_LEVEL',
        chosenLevelId: levelId,
      });
    },
    signIn: async (userToken, userId, chosenLevel) => {
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userId', userId);
        await AsyncStorage.setItem('chosenLevelId', chosenLevel);
      } catch (error) {
        console.log('-------------------------------');
        console.log('signIn asyncstorage error: ', error);
        console.log('-------------------------------');
      }
      dispatch({
        type: 'LOGIN',
        id: userId,
        token: userToken,
        chosenLevelId: chosenLevel,
      });
    },
    signUp: async (statusSignUp, chosenLevel) => {
      try {
        await AsyncStorage.setItem('status', statusSignUp);
        await AsyncStorage.setItem('chosenLevelId', chosenLevel);
      } catch (error) {
        console.log('-------------------------------');
        console.log('signUp asyncstorage error: ', error);
        console.log('-------------------------------');
      }
      dispatch({
        type: 'REGISTER',
        status: statusSignUp,
        chosenLevelId: chosenLevel,
      });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('chosenLevelId');
      } catch (error) {
        console.log('-------------------------------');
        console.log('signOut error: ', error);
        console.log('-------------------------------');
      }
      dispatch({ type: 'LOGOUT' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      let chosenLevelId = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        chosenLevelId = await AsyncStorage.getItem('chosenLevelId');
      } catch (error) {
        console.log('-------------------------------');
        console.log('retrieve token error: : ', error);
        console.log('-------------------------------');
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken, levelId: chosenLevelId });
    }, 2500);
  }, []);

  if (loginState.isLoading) {
    return (
      <Loading />
    );
  }

  if (loginState.status === 'succeeded') {
    return (
      <AuthContext.Provider value={authConText}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <TopicStackScreen />
          </NavigationContainer>
        </SafeAreaView>
      </AuthContext.Provider>);
  } if (loginState.userToken !== null &&
    loginState.chosenLevelId !== null) {
    return (
      <AuthContext.Provider value={authConText}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerStyle={{
                backgroundColor: Colors.opalescent,
              }}
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="Topic" component={Topic} />
              <Drawer.Screen name="Screen1" component={Screen1} />
              <Drawer.Screen name="Screen2" component={Screen2} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AuthContext.Provider>);
  } if (loginState.userToken !== null &&
    loginState.chosenLevelId === null) {
    return (
      <AuthContext.Provider value={authConText}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <LevelPage />
          </NavigationContainer>
        </SafeAreaView>
      </AuthContext.Provider>);
  }
  return (
    <AuthContext.Provider value={authConText}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <TopicStackScreen />
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
