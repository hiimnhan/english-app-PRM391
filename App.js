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

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen2 from './app/screens/draft/Screen2';
import Screen1 from './app/screens/draft/Screen1';
import HomePage from './app/screens/HomePage/index';
import { DrawerContent } from './app/components/DrawerContent';
import TopicStackScreen from './app/screens/stacks/TopicStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{
              backgroundColor: 'transparent',
            }}
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Topic" component={TopicStackScreen} />
            <Drawer.Screen name="HomePage" component={HomePage} />
            <Drawer.Screen name="Screen1" component={Screen1} />
            <Drawer.Screen name="Screen2" component={Screen2} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
