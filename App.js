/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useMemo, useReducer } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './app/components/Context';
import DrawerContent from './app/components/DrawerContent';
import Colors from './app/assets/styles/colors';
import Screen1 from './app/screens/draft/Screen1';
import Screen2 from './app/screens/draft/Screen2';
import Topic from './app/screens/Topic';
import TopicStackScreen from './app/screens/stacks/TopicStackScreen';
import ProgressBar from './app/components/ProgressBar';
import VocabularyScreen from './app/screens/VocabularyScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      default:
        break;
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // Create function to execute in other components.
  const authConText = useMemo(() => ({
    signIn: async (userName, passWord) => {
      // setUserToken('abcd');
      // setIsLoading(false);
      if (userName !== null && passWord !== null) {
        axios.post('http://10.0.3.2:8090/rest-api/login', {
          username: userName,
          password: passWord,
        })
          .then(response => {
            loginState.userToken = response.data.data.accessToken;
            console.log('response: ', loginState.userToken);
          })
          .catch(e => {
            console.log('signIn api error: ', e);
          });
        try {
          await AsyncStorage.setItem('userToken', loginState.userToken);
        } catch (error) {
          console.log('-------------------------------');
          console.log('signIn asyncstorage error: ', error);
          console.log('-------------------------------');
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: loginState.userToken });
    },
    signUp: () => {
      // setUserToken('abcd');
      // setIsLoading(false);
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
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
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log('-------------------------------');
        console.log('retrieve token: ', userToken);
        console.log('-------------------------------');
      } catch (error) {
        console.log('-------------------------------');
        console.log('retrieve token error: : ', error);
        console.log('-------------------------------');
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={Colors.pink}
        />
      </View>
    );
  }

  return (
    <>
      <AuthContext.Provider value={authConText}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            {/* The things appear in Menubar */}
            {loginState.userToken !== null ? (
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
            )
              : <TopicStackScreen />}
          </NavigationContainer>
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
