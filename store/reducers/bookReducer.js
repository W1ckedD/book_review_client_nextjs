import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from '@store/action-types';
const initialState = { books: [], book: null, loading: false, error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: [], error: '', loading: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, error: '', loading: false };
    case GET_BOOKS_ERROR:
      return { ...state, books: [], error: action.payload, loading: false };
    default:
      return state;
  }
}