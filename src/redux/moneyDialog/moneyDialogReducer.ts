import { TOGGLE_MONEY, MoneyDialogAction } from './moneyDialogAction';
import { MoneyDialogState, initialState } from './moneyDialogState';

export const moneyDialogReducer = (
  state: MoneyDialogState = initialState,
  action: MoneyDialogAction
): MoneyDialogState => {
  switch (action.type) {
    case TOGGLE_MONEY:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
