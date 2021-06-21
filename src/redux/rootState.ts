import { DrawerState } from './drawer/drawerState';
import { SpinnerState } from './spinner/spinnerState';
import { UserState } from './user/userState';

export interface RootState {
  spinnerReducer: SpinnerState;
  drawerReducer: DrawerState;
  userReducer: UserState;
}
