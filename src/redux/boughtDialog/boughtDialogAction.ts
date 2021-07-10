export const TOGGLE_BOUGHT_DIALOG = 'TOGGLE_BOUGHT_DIALOG';
export const SET_DATA_BOUGHT = 'SET_DATA_BOUGHT';

export interface ToggleBoughtDialogAction {
  type: typeof TOGGLE_BOUGHT_DIALOG;
  payload: any[];
}

export interface SetDataBoughtDialogAction {
  type: typeof SET_DATA_BOUGHT;
  payload: any[];
}

export type BoughtDialogAction =
  | ToggleBoughtDialogAction
  | SetDataBoughtDialogAction;
