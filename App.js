/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './app/components/Context';
import DrawerContent from './app/components/DrawerContent';
import Colors from './app/assets/styles/colors';
import Screen1 from './app/screens/draft/Screen1';
import Screen2 from './app/screens/draft/Screen2';
import TopicStackScreen from './app/screens/stacks/TopicStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  // Create function to execute.
  const authConText = useMemo(() => ({
    signIn: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // return () => {
    //   cleanup
    // }
  }, []);

  if (isLoading) {
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
            {userToken !== null ? (
              <Drawer.Navigator
                drawerStyle={{
                  backgroundColor: 'transparent',
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
              >
                <Drawer.Screen name="TopicStackScreen" component={TopicStackScreen} />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
