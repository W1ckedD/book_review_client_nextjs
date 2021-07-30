import { LOADING_FALSE, LOADING_TRUE } from '@store/action-types';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING_TRUE:
      return { ...state, isLoading: true };
    case LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state
  }
}