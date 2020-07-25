import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Image goes here</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text>Title goes here</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Body goes here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default index;
