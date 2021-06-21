import { DrawerState } from './drawer/drawerState';
import { SignInDialogState } from './signInDialog/signInDialogState';
import { SignUpDialogState } from './signUpDialog/signUpDialogState';
import { SpinnerState } from './spinner/spinnerState';
import { UserState } from './user/userState';

export interface RootState {
  spinnerReducer: SpinnerState;
  drawerReducer: DrawerState;
  userReducer: UserState;
  signInDialogReducer: SignInDialogState;
  signUpDialogReducer: SignUpDialogState;
}
