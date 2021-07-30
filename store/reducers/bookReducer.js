import { GET_BOOKS } from '@store/action-types';
const inittialState = { books: [], book: null };

export default (state = inittialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}