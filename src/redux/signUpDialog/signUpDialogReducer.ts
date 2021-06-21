import { TOGGLE_SIGN_UP, SignUpDialogAction } from './signUpDialogAction';
import { SignUpDialogState, initialState } from './signUpDialogState';

export const signUpDialogReducer = (
  state: SignUpDialogState = initialState,
  action: SignUpDialogAction
): SignUpDialogState => {
  switch (action.type) {
    case TOGGLE_SIGN_UP:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
