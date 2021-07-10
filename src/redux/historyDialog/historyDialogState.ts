export interface HistoryDialogState {
  open: boolean;
  data: any[];
}

export const initialState: HistoryDialogState = {
  open: false,
  data: [],
};
