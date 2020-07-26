import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { wordConstants } from '../constants/word.constants';
import {
  getFirstWordSuccess,
  getFirstWordFailure,
  getNextWordSuccess,
  getNextWordFailure,
  getPreviousWordSuccess,
  getPreviousWordFailure,
  getWordSuccess,
  getWordFailure,
} from '../actions/word.actions';
import { baseUrl } from '../../../settings';
import { setHeader } from '../../../services';

function* getFirstWord(params) {
  const { accessToken, topicId, levelId, userId } = params.params;
  const config = setHeader(accessToken);
  try {
    const result = yield axios
      .get(
        `${baseUrl +
          wordConstants.GET_FIRST_WORD_PATH}?levelId=${levelId}&topicId=${topicId}&userId=${userId}`,
        config,
      )
      .then(res => res.data);

    yield put(getFirstWordSuccess(result.data));
  } catch (error) {
    yield put(getFirstWordFailure(error));
  }
}

function* getNextWord(params) {
  const { accessToken, userId, wordId } = params.params;
  const config = setHeader(accessToken);
  try {
    const result = yield axios
      .get(
        `${baseUrl +
          wordConstants.GET_NEXT_WORD_PATH}?userId=${userId}&wordId=${wordId}`,
        config,
      )
      .then(res => res.data);
    const word = result.data.content[0];
    yield put(getNextWordSuccess(word));
  } catch (error) {
    yield put(getNextWordFailure(error));
  }
}

function* getPreviousWord(params) {
  const { accessToken, wordId } = params.params;
  const config = setHeader(accessToken);
  try {
    const result = yield axios
      .get(
        `${baseUrl + wordConstants.GET_PREVIOUS_WORD_PATH}?wordId=${wordId}`,
        config,
      )
      .then(res => res.data);
    const word = result.data.content[0];
    yield put(getPreviousWordSuccess(word));
  } catch (error) {
    yield put(getPreviousWordFailure(error));
  }
}

function* getWord(wordParams) {
  const { accessToken, wordId, userId, page } = wordParams.params;
  const config = setHeader(accessToken);
  try {
    const result = yield axios
      .get(
        `${baseUrl +
          wordConstants.GET_WORD_PATH}?userId=${userId}&wordId=${wordId}&page=${page}`,
        config,
      )
      .then(res => res.data);
    yield put(getWordSuccess(result.data));
  } catch (error) {
    yield put(getWordFailure(error));
  }
}

export default function* wordSagas() {
  yield takeEvery(wordConstants.GET_FIRST_WORD_REQUEST, getFirstWord);
  yield takeEvery(wordConstants.GET_NEXT_WORD_REQUEST, getNextWord);
  yield takeEvery(wordConstants.GET_PREVIOUS_WORD_REQUEST, getPreviousWord);
  yield takeEvery(wordConstants.GET_WORD_REQUEST, getWord);
}
