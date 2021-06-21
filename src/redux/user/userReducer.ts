import { SET_USER, UserAction } from './userAction';
import { UserState, initialState } from './userState';

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
