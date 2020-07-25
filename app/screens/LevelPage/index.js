import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Degree from '../../assets/images/Degree-pana.png';
import Colors from '../../assets/styles/colors';
import moduleName from 'react-native-li';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={Degree}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <View>

          <View>

          </View>
        </View>
        <Text style={styles.title}>Select Level you want to learn</Text>
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
    backgroundColor: Colors.white,
  },
  headerContainer: {
    flex: 3,
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
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    color: Colors.darkGray,
  },
});

export default index;
