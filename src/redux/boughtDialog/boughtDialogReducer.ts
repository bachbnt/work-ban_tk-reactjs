import {
  TOGGLE_BOUGHT_DIALOG,
  BoughtDialogAction,
  SET_DATA_BOUGHT,
} from './boughtDialogAction';
import { BoughtDialogState, initialState } from './boughtDialogState';

export const boughtDialogReducer = (
  state: BoughtDialogState = initialState,
  action: BoughtDialogAction
): BoughtDialogState => {
  switch (action.type) {
    case TOGGLE_BOUGHT_DIALOG:
      return {
        ...state,
        open: !state.open,
      };
    case SET_DATA_BOUGHT:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
