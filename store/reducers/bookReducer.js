import { GET_BOOKS } from '@store/action-types';
const initialState = { books: [], book: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}