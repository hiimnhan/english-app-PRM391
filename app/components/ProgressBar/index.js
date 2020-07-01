import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../assets/styles/colors';

export default function ProgressBar(props) {
  const { bgColor, current, total } = props;

  const progress = (current / total) * 100;
  const styles = StyleSheet.create({
    container: {
      width: 140,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.graySmallText,
      fontSize: 14,
    },
    progressContainer: {
      height: 10,
      width: '100%',
      backgroundColor: colors.gray,
      borderRadius: 50,
    },
    progressFiller: {
      height: 10,
      width: `${progress}%`,
      backgroundColor: bgColor,
      borderRadius: 50,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${current} / ${total}`}</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressFiller} />
      </View>
    </View>
  );
}
