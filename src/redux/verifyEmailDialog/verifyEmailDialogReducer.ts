import {
  TOGGLE_VERIFY_EMAIL,
  VerifyEmailDialogAction,
} from './verifyEmailDialogAction';
import { VerifyEmailDialogState, initialState } from './verifyEmailDialogState';

export const verifyEmailDialogReducer = (
  state: VerifyEmailDialogState = initialState,
  action: VerifyEmailDialogAction
): VerifyEmailDialogState => {
  switch (action.type) {
    case TOGGLE_VERIFY_EMAIL:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
