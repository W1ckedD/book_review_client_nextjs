import { LOADING_FALSE, LOADING_TRUE } from '@store/action-types';

export const loadingTrue = () => dispatch => {
  dispatch({ type: LOADING_TRUE });
}

export const loadingFalse = () => dispatch => {
  dispatch({ type: LOADING_FALSE });
}