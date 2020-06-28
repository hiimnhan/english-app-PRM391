/* eslint-disable object-curly-newline */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../assets/styles/colors';

export default function Screen1({ navigation }) {
  return (
    <View>
      <Text>Hello screen 1, How are you</Text>
      <TouchableOpacity
        style={styles.button}
        title="Back to topic"
        onPress={() => navigation.navigate('Topic')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    backgroundColor: colors.purpleVolume,
  },
});
