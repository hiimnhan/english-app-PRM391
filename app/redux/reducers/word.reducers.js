import produce from 'immer';
import { wordConstants } from '../constants/word.constants';

const initialState = {
  word: {},
  errors: '',
  loading: false,
};

// export const wordReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case wordConstants.GET_FIRST_WORD_REQUEST:
//         draft.word = {};
//         draft.loading = true;
//       case wordConstants.GET_FIRST_WORD_SUCCEED:
//         draft.word = action.word;
//         draft.loading = false;
//       case wordConstants.GET_FIRST_WORD_FAILURE:
//         draft.errors = action.errors;
//         draft.loading = false;
//     }
//   });

export const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case wordConstants.GET_FIRST_WORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case wordConstants.GET_FIRST_WORD_SUCCEED:
      return {
        ...state,
        word: action.word,
        loading: false,
      };
      break;
    case wordConstants.GET_FIRST_WORD_FAILURE:
      return {
        word: {},
        errors: action.errors.message,
        loading: false,
      };
    default:
      return state;
  }
};
