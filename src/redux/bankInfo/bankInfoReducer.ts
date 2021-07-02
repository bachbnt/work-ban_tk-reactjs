import { SET_BANK_INFO, BankInfoAction } from './bankInfoAction';
import { BankInfoState, initialState } from './bankInfoState';

export const bankInfoReducer = (
  state: BankInfoState = initialState,
  action: BankInfoAction
): BankInfoState => {
  switch (action.type) {
    case SET_BANK_INFO:
      return action.payload;
    default:
      return state;
  }
};
