import { otherSchema } from 'src/utils/validation';
import * as yup from 'yup';

export interface BankInfoFormValue {
  bankName: string;
  accountNumber: string;
  accountName: string;
  transferContent: string;
}

export const bankInfoFormSchema = yup.object().shape({
  bankName: otherSchema,
  accountNumber: otherSchema,
  accountName: otherSchema,
  transferContent: otherSchema,
});
