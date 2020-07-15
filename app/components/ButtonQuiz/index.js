import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../../assets/styles/colors';
export default function ButtonQuiz(props) {
  const { answer, isCorrect } = props;
  const brColor = isCorrect ? colors.greenNormal : colors.red;
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const handleCheckAnswer = () => {
    isCorrectAnswer ? (
      <FontAwesomeIcon
        icon={['far', 'check-circle']}
        size={18}
        style={{ color: colors.greenNormal }}
      />
    ) : (
      <FontAwesomeIcon
        icon={['far', 'times-circle']}
        size={18}
        style={{ color: colors.red }}
      />
    );
  };
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{ ...styles.buttonContainer, ...{ borderColor: brColor } }}>
      {handleCheckAnswer}
      <Text style={styles.answer}>{answer}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 324,
    height: 54,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.blueButton,
  },
  answer: {
    color: colors.blueButton,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
