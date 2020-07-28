import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../components/Context';
import Degree from '../../assets/images/Degree-pana.png';
import Colors from '../../assets/styles/colors';

const index = () => {

  const { setLevelId } = useContext(AuthContext);

  const handleLevel = async val => {
    const token = await AsyncStorage.getItem('userToken');
    const id = await AsyncStorage.getItem('userId');
    axios.post(
      `http://10.0.2.2:8090/rest-api/user/set_level?access_token=${token}&levelId=${parseInt(val)}&userId=${parseInt(id)}`
    )
      .then(response => {
        setLevelId(response.data.data.lastestLevelId.id);
      })
      .catch(e => {
        console.log('setLevel api error: ', e);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={Degree}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Select Level you want to learn</Text>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          style={styles.levelContainer}
          onPress={() => handleLevel('1')}
        >
          <View style={{ ...styles.circle, ...styles.easy }}>
            <Text style={styles.number}>
              1
            </Text>
          </View>
          <View style={styles.textLevel}>
            <Text style={styles.text}>
              Easy
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.levelContainer}
          onPress={() => handleLevel('2')}
        >
          <View style={{ ...styles.circle, ...styles.medium }}>
            <Text style={styles.number}>
              2
            </Text>
          </View>
          <View style={styles.textLevel}>
            <Text style={styles.text}>
              Medium
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.levelContainer}
          onPress={() => handleLevel('3')}
        >
          <View style={{ ...styles.circle, ...styles.hard }}>
            <Text style={styles.number}>
              3
            </Text>
          </View>
          <View style={styles.textLevel}>
            <Text style={styles.text}>
              Hard
            </Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
  },
  bodyContainer: {
    flex: 3,
    flexDirection: 'column',
    bottom: '5%',
    justifyContent: 'flex-start',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  levelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: '3%',
    elevation: 3,
  },
  footerContainer: {
    flex: 1,
    bottom: '3%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    color: Colors.darkGray,
  },
  gradient: {
    flex: 1,
  },
  textLevel: {
    flex: 9,
    right: '25%',
    alignItems: 'center',
  },
  circle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    left: '20%',
    top: '0.5%',
    height: '70%',
    borderColor: Colors.lightPink,
    borderRadius: 50,
  },
  easy: {
    backgroundColor: Colors.lightPink,
  },
  medium: {
    backgroundColor: Colors.mediumPink,
  },
  hard: {
    backgroundColor: Colors.solidPink,
  },
  text: {
    fontSize: 25,
    color: Colors.darkGray,
  },
  number: {
    fontSize: 18,
    color: Colors.opalescent,
  },
  backButtonContainer: {
    paddingHorizontal: '20%',
    backgroundColor: Colors.pink,
  },
  textButton: {
    top: '25%',
    textAlign: 'center',
    color: Colors.white,
  },
  icon: {
    fontSize: 15,
  },
  pretend: {
    color: Colors.pink
  },
});

export default index;
