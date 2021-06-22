import { DrawerState } from './drawer/drawerState';
import { MoneyDialogState } from './moneyDialog/moneyDialogState';
import { SignInDialogState } from './signInDialog/signInDialogState';
import { SignUpDialogState } from './signUpDialog/signUpDialogState';
import { SpinnerState } from './spinner/spinnerState';
import { UserState } from './user/userState';
import { VerifyEmailDialogState } from './verifyEmailDialog/verifyEmailDialogState';

export interface RootState {
  spinnerReducer: SpinnerState;
  drawerReducer: DrawerState;
  userReducer: UserState;
  signInDialogReducer: SignInDialogState;
  signUpDialogReducer: SignUpDialogState;
  verifyEmailDialogReducer: VerifyEmailDialogState;
  moneyDialogReducer: MoneyDialogState;
}
