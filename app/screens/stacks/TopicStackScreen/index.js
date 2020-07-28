import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Topic from '../../Topic';
import LoginPage from '../../LoginPage';
import RegistrationPage from '../../RegistrationPage';
import SplashPage from '../../SplashPage';
import LevelPage from '../../LevelPage';

const Stack = createStackNavigator();

const TopicStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="SplashPage" component={SplashPage} />
      <Stack.Screen name="LevelPage" component={LevelPage} />
      <Stack.Screen name="Topic" component={Topic} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
    </Stack.Navigator>
  );
};

export default TopicStackScreen;
