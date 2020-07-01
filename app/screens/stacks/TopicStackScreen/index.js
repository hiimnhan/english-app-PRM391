/* eslint-disable arrow-body-style */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Topic from '../../Topic';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';

const Stack = createStackNavigator();

const index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
      initialRouteName="HomePage"
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Topic" component={Topic} />
    </Stack.Navigator>
  );
};

export default index;
