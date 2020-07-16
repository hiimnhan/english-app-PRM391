import React, { useState, useRef, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressBar from '../../components/ProgressBar';
import ImageButton from '../../components/shared/ImageButton';
import Loading from '../../components/shared/Loading';

import colors from '../../assets/styles/colors';

import basketball from '../../assets/images/basketball.jpg';

import home1 from '../../assets/icons/home1.png';
import backward from '../../assets/icons/arrow-back.png';
import forward from '../../assets/icons/arrow-go.png';

import * as lodash from 'lodash';

import { connect } from 'react-redux';
import {
  getNextWordRequest,
  getPreviousWordRequest,
} from '../../redux/actions/word.actions';

function VocabularyScreen(props) {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWQiOjIsInVzZXJuYW1lIjoic3RyaW5nIiwicm9sZSI6IlVTRVIiLCJleHAiOjE1OTQ4OTQ1NTl9.KpVyisd57H86BZqmUqxuDHjO63ErAMZq--grwrNyEo4';
  const userId = 2;

  const { word = {}, loading, navigation, getNextWord, getPrevWord } = props;

  const vocabulary = lodash.get(word, 'vocabulary', '');
  const spell = lodash.get(word, 'spell', '');
  const title = lodash.get(word, 'topicOfWord.name', '');
  const wordId = lodash.get(word, 'id');

  const current = wordId % 10;

  const animatedValue = new Animated.Value(0);
  const total = 10;
  let aValue = 0;
  animatedValue.addListener(({ value }) => {
    aValue = value;
  });
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const _flipCard = () => {
    if (aValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleClickNextButton = async () => {
    await getNextWord({
      accessToken,
      userId,
      wordId,
    });
    await navigation.push('Vocabulary');
  };

  const handleClickBackButton = async () => {
    await getPrevWord({
      accessToken,
      wordId: wordId,
    });
    await navigation.push('Vocabulary');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonBack}
          activeOpacity={1}
          onPress={() => navigation.navigate('Topic')}>
          <Image source={home1} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <ProgressBar
          current={current}
          total={total}
          bgColor={colors.greenNormal}
        />
      </View>

      {loading ? (
        <View
          style={{
            height: 520,
            marginTop: 30,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Loading />
        </View>
      ) : (
        <Fragment>
          <View style={styles.vocabContainer}>
            <Animated.View style={[styles.vocabInner, frontAnimatedStyle]}>
              <TouchableOpacity activeOpacity={1} onPress={() => _flipCard()}>
                <Image source={basketball} style={styles.imageVocab} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                styles.vocabInnerBack,
                styles.vocabInner,
                backAnimatedStyle,
              ]}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                activeOpacity={1}
                onPress={() => _flipCard()}>
                <Text style={styles.word}>{vocabulary}</Text>
                <Text style={styles.spelling}>{spell}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.buttonsContainer}>
            <ImageButton
              onPress={() => handleClickBackButton()}
              image={backward}
              disabled={current === 1}
              imageStyle={{ width: 48, height: 48 }}
            />
            <ImageButton
              onPress={() => handleClickNextButton()}
              image={forward}
              disabled={current === total}
              imageStyle={{ width: 48, height: 48 }}
            />
          </View>
        </Fragment>
      )}
    </View>
  );
}

const mapStateToProps = state => {
  return {
    word: state.wordReducer.word,
    loading: state.wordReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    getNextWord: params => dispatch(getNextWordRequest(params)),
    getPrevWord: params => dispatch(getPreviousWordRequest(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VocabularyScreen);

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
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 20,
    marginTop: 10,
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
    height: 410,
    width: 300,
    backgroundColor: colors.purpleCardVoc,
    borderRadius: 30,
    marginTop: 40,
    backfaceVisibility: 'hidden',
  },
  vocabInnerBack: {
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
