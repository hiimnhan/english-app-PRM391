import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import QuizImage from '../../assets/images/quiz.png';
import Rocket from '../../assets/icons/rocket.png';
import colors from '../../assets/styles/colors';
export default function QuizIntroScreen() {
  return (
    <View style={styles.container}>
      <Image source={QuizImage} style={styles.image} />
      <Text style={styles.mainText}>Practice what you have learnt!</Text>
      <Text style={styles.subText}>
        You will have a pop quiz to see how many words you can remember
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}> Let's start</Text>
        <Image source={Rocket} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 330,
    height: 400,
  },
  mainText: {
    color: colors.blueText,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subText: {
    color: colors.graySmallText,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 240,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: colors.blueButton,
    flexDirection: 'row',
    borderRadius: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 36,
    height: 36,
    marginLeft: 10,
  },
});
