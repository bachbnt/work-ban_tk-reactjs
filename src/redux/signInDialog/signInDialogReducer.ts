import { TOGGLE_SIGN_IN, SignInDialogAction } from './signInDialogAction';
import { SignInDialogState, initialState } from './signInDialogState';

export const signInDialogReducer = (
  state: SignInDialogState = initialState,
  action: SignInDialogAction
): SignInDialogState => {
  switch (action.type) {
    case TOGGLE_SIGN_IN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
