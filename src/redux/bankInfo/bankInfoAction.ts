import { BankInfo } from 'src/models/bankInfo';

export const SET_BANK_INFO = 'SET_BANK_INFO';

export interface SetBankInfoAction {
  type: typeof SET_BANK_INFO;
  payload: BankInfo;
}

export type BankInfoAction = SetBankInfoAction;
