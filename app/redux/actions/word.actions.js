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

export const getNextWordRequest = params => {
  return {
    type: wordConstants.GET_NEXT_WORD_REQUEST,
    params,
  };
};

export const getNextWordSuccess = word => {
  return {
    type: wordConstants.GET_NEXT_WORD_SUCCEED,
    word,
  };
};

export const getNextWordFailure = errors => {
  return {
    type: wordConstants.GET_NEXT_WORD_FAILURE,
    errors,
  };
};

export const getPreviousWordRequest = params => {
  return {
    type: wordConstants.GET_PREVIOUS_WORD_REQUEST,
    params,
  };
};

export const getPreviousWordSuccess = word => {
  return {
    type: wordConstants.GET_PREVIOUS_WORD_SUCCEED,
    word,
  };
};

export const getPreviousWordFailure = errors => {
  return {
    type: wordConstants.GET_PREVIOUS_WORD_FAILURE,
    errors,
  };
};

export const getWordRequest = params => {
  return {
    type: wordConstants.GET_WORD_REQUEST,
    params,
  };
};

export const getWordSuccess = wordData => {
  return {
    type: wordConstants.GET_WORD_SUCCESS,
    wordData,
  };
};

export const getWordFailure = errors => {
  return {
    type: wordConstants.GET_WORD_FAILURE,
    errors,
  };
};
