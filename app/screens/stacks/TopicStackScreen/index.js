import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Topic from '../../Topic';
import LoginPage from '../../LoginPage';
import SplashPage from '../../SplashPage';

const Stack = createStackNavigator();

export default function TopicStackScreen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="SplashPage" component={SplashPage} />
      <Stack.Screen name="Topic" component={Topic} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
