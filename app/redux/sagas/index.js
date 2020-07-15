import { all, fork } from 'redux-saga/effects';
import wordSagas from './word.sagas';

export default function* rootSaga() {
  yield all([wordSagas()]);
}
