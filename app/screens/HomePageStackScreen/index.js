import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../HomePage';

const Stack = createStackNavigator();

const index = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default index;
