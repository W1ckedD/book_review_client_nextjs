import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux';
import * as ActionCreators from '@store/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
}