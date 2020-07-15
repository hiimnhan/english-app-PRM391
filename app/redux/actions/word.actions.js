import { wordConstants } from '../constants/word.constants';

export const getFirstWordRequest = params => {
  return {
    type: wordConstants.GET_FIRST_WORD_REQUEST,
    params,
  };
};

export const getFirstWordSuccess = word => {
  return {
    type: wordConstants.GET_FIRST_WORD_SUCCEED,
    word,
  };
};

export const getFirstWordFailure = errors => ({
  type: wordConstants.GET_FIRST_WORD_FAILURE,
  errors,
});
