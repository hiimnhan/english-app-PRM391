import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import ImageButton from '../../components/shared/ImageButton';

import colors from '../../assets/styles/colors';

import basketball from '../../assets/images/basketball.jpg';

import home1 from '../../assets/icons/home1.png';
import likeNormal from '../../assets/icons/like-normal.png';
import likeGreen from '../../assets/icons/like-green.png';
import backward from '../../assets/icons/arrow-back.png';
import forward from '../../assets/icons/arrow-go.png';

export default function VocabularyScreen(props) {
  const {
    word = 'Basketball',
    spelling = 'ˈbɑːskɪtbɔːl',
    title = 'Sports',
    current = 10,
    total = 20,
  } = props;

  const [isChecked, setIsChecked] = useState(false);

  const animatedValue = new Animated.Value(0);

  const _start = () => {
    Animated.timing(animatedValue, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonBack}>
          <Image source={home1} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <ProgressBar
          current={current}
          total={total}
          bgColor={colors.greenNormal}
        />
      </View>
      <View style={styles.vocabContainer}>
        <View style={{ zIndex: 22, elevation: 22 }}>
          <TouchableOpacity
            style={styles.vocabInner}
            activeOpacity={1}
            onPress={() => _start()}>
            <Image source={basketball} style={styles.imageVocab} />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 80],
                }),
              },
            ],
            backgroundColor: colors.purpleCardVoc,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            height: 136,
            width: 290,
            elevation: 1,
            zIndex: 1,
            position: 'absolute',
            top: 240,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.spelling}>{spelling}</Text>
        </Animated.View>
      </View>
      <View style={styles.buttonsContainer}>
        <ImageButton image={backward} imageStyle={{ width: 48, height: 48 }} />
        <ImageButton
          onPress={() => setIsChecked(() => !isChecked)}
          image={isChecked ? likeNormal : likeGreen}
          imageStyle={{ width: 48, height: 48 }}
        />
        <ImageButton image={forward} imageStyle={{ width: 48, height: 48 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  buttonImage: {
    width: 48,
    height: 48,
    margin: 10,
  },
  title: {
    color: colors.purpleText,
    fontSize: 48,
    fontWeight: 'bold',
    marginRight: 20,
  },
  vocabContainer: {
    height: 520,
    marginTop: 30,
    backgroundColor: colors.gray1,
    borderRadius: 30,
    alignItems: 'center',
    position: 'relative',
  },
  vocabInner: {
    height: 310,
    width: 290,
    backgroundColor: colors.purpleCardVoc,
    borderRadius: 30,
    marginTop: 40,
  },
  imageVocab: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  word: {
    color: colors.white,
    fontSize: 48,
    fontWeight: 'bold',
  },
  spelling: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 580,
    left: '15%',
    height: 64,
    width: 290,
    justifyContent: 'space-around',
  },
});
