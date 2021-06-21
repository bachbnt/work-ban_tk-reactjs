import { TOGGLE_DRAWER, DrawerAction } from './drawerAction';
import { DrawerState, initialState } from './drawerState';

export const drawerReducer = (
  state: DrawerState = initialState,
  action: DrawerAction
): DrawerState => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
