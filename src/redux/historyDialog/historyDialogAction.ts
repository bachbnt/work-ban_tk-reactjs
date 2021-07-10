export const TOGGLE_HISTORY_DIALOG = 'TOGGLE_HISTORY_DIALOG';
export const SET_DATA_HISTORY = 'SET_DATA_HISTORY';

export interface ToggleHistoryDialogAction {
  type: typeof TOGGLE_HISTORY_DIALOG;
}

export interface SetDataHistoryDialogAction {
  type: typeof SET_DATA_HISTORY;
  payload: any[];
}

export type HistoryDialogAction =
  | ToggleHistoryDialogAction
  | SetDataHistoryDialogAction;
