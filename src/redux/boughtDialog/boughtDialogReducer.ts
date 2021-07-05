import { TOGGLE_BOUGHT_DIALOG, BoughtDialogAction } from './boughtDialogAction';
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
        data: action.payload,
      };
    default:
      return state;
  }
};
