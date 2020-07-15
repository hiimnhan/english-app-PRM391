import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { wordConstants } from '../constants/word.constants';
import {
  getFirstWordSuccess,
  getFirstWordFailure,
} from '../actions/word.actions';
import { baseUrl } from '../../../settings';

function* getFirstWord(params) {
  const { accessToken, topicId, levelId, userId } = params.params;
  const config = {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  };
  try {
    const result = yield axios
      .get(
        `${baseUrl +
          wordConstants.GET_FIRST_WORD_PATH}?levelId=${levelId}&topicId=${topicId}&userId=${userId}`,
        config,
      )
      .then(res => res.data);

    const word = result.data.content[0];
    yield put(getFirstWordSuccess(word));
  } catch (error) {
    yield put(getFirstWordFailure(error));
  }
}

export default function* wordSagas() {
  yield takeEvery(wordConstants.GET_FIRST_WORD_REQUEST, getFirstWord);
}
