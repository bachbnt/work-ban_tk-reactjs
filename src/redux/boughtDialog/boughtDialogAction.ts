export const TOGGLE_BOUGHT_DIALOG = 'TOGGLE_BOUGHT_DIALOG';

export interface ToggleBoughtDialogAction {
  type: typeof TOGGLE_BOUGHT_DIALOG;
  payload: any[];
}

export type BoughtDialogAction = ToggleBoughtDialogAction;
