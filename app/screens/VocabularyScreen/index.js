import React, { useState, useRef, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressBar from '../../components/ProgressBar';
import ImageButton from '../../components/shared/ImageButton';
import Loading from '../../components/shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import colors from '../../assets/styles/colors';

import questionMark from '../../assets/images/question-mark.png';

import backward from '../../assets/icons/arrow-back.png';
import forward from '../../assets/icons/arrow-go.png';
import finish from '../../assets/icons/finish.png';

import * as lodash from 'lodash';

import { connect } from 'react-redux';
import {
  getNextWordRequest,
  getPreviousWordRequest,
  getWordRequest,
} from '../../redux/actions/word.actions';
import SpeechBox from '../../components/SpeechBox';

function VocabularyScreen(props) {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWQiOjIsInVzZXJuYW1lIjoic3RyaW5nIiwicm9sZSI6IlVTRVIiLCJleHAiOjE1OTU3NzkwOTd9.igfkQjyvh2StuG6fxJlEYGMlwdS0smo7V-fYtpqx4qU';
  const userId = 2;

  const { word = {}, loading, navigation, getPrevWord, getWord } = props;

  const vocabulary = lodash.get(word, 'content[0].vocabulary', '');
  const spell = lodash.get(word, 'content[0].spell', '');
  const translateVi = lodash.get(word, 'content[0].translateVi', '');
  const imageUrl = lodash.get(word, 'content[0].image', '');
  const title = lodash.get(word, 'content[0].topicOfWord.name', '');

  const wordId = lodash.get(word, 'content[0].id', '');

  const current = lodash.get(word, 'number', '');
  const total = lodash.get(word, 'totalPages', '');

  const isFinish = lodash.get(word, 'last', false);
  const isFirst = lodash.get(word, 'first', false);

  const animatedValue = new Animated.Value(0);

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
    await getWord({
      accessToken,
      userId,
      wordId,
      page: current + 1,
    });

    if (isFinish) navigation.navigate('QuizIntro');
  };

  const handleClickBackButton = async () => {
    await getWord({
      accessToken,
      userId,
      wordId,
      page: current - 1,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonBack}
          activeOpacity={1}
          onPress={() => navigation.navigate('Topic')}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            size={36}
            color={colors.graySmallText}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
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
                <Image
                  source={imageUrl === '' ? questionMark : { uri: imageUrl }}
                  style={styles.imageVocab}
                />
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
                <Text style={styles.spelling}>{translateVi}</Text>

                <SpeechBox
                  containerStyles={styles.speechBox}
                  word={vocabulary}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>

          <View style={styles.buttonsContainer}>
            <ImageButton
              onPress={() => handleClickBackButton()}
              image={backward}
              disabled={isFirst}
              imageStyle={{ width: 48, height: 48 }}
            />
            <ProgressBar
              current={current + 1}
              total={total}
              bgColor={colors.greenNormal}
            />
            <ImageButton
              onPress={() => handleClickNextButton()}
              image={forward}
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
    getWord: params => dispatch(getWordRequest(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VocabularyScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonBack: {
    marginTop: 20,
    marginRight: 10,
  },
  title: {
    color: colors.purpleCardVoc,
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 50,
    // marginTop: 10,
    paddingTop: 20,
    //marginLeft: 80,
    textAlign: 'center',
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
  buttonFinish: {
    position: 'absolute',
    top: 580,
    left: '15%',
    height: 54,
    width: 240,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
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
  speechBox: {
    position: 'absolute',
    top: 300,
  },
});
