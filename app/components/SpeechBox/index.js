import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import colors from '../../assets/styles/colors';
const SpeechBox = props => {
  const { containerStyles, word } = props;

  const handleListenWord = word => {};
  return (
    <TouchableOpacity
      onPress={() => handleListenWord(word)}
      style={[styles.volume, containerStyles]}>
      <FontAwesomeIcon icon={faHeadphones} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  volume: {
    width: 64,
    height: 64,
    backgroundColor: colors.purpleVolume,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeechBox;
