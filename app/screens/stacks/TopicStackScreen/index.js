import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Topic from '../../Topic';
import VocabularyScreen from '../../VocabularyScreen';
import QuizIntroScreen from '../../QuizIntroScreen';

const Stack = createStackNavigator();

export default function TopicStackScreen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal">
      <Stack.Screen name="Topic" component={Topic} />
      <Stack.Screen name="Vocabulary" component={VocabularyScreen} />
      <Stack.Screen name="QuizIntro" component={QuizIntroScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
