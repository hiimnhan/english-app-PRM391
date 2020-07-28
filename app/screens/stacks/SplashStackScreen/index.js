//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../../LoginPage';
import RegistrationPage from '../../RegistrationPage';
import SplashPage from '../../SplashPage';
import LevelPage from '../../LevelPage';

const Stack = createStackNavigator();
// create a component
const index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="SplashPage" component={SplashPage} />
      <Stack.Screen name="LevelPage" component={LevelPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
    </Stack.Navigator>
  );
};

// make this component available to the app
export default index;
