import {
  TOGGLE_HISTORY_DIALOG,
  HistoryDialogAction,
  SET_DATA_HISTORY,
} from './historyDialogAction';
import { HistoryDialogState, initialState } from './historyDialogState';

export const historyDialogReducer = (
  state: HistoryDialogState = initialState,
  action: HistoryDialogAction
): HistoryDialogState => {
  switch (action.type) {
    case TOGGLE_HISTORY_DIALOG:
      return {
        ...state,
        open: !state.open,
      };
    case SET_DATA_HISTORY:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
