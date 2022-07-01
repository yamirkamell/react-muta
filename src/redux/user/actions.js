import {
  SET_INITIAL,
  EDIT_USER, 
} from './types';

export const setInitialState = () => ({
  type: SET_INITIAL,
});

export const editUser = (payload) => ({
  type: EDIT_USER,
  payload,
});
