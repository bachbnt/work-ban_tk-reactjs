import { codeSchema } from 'src/utils/validation';
import * as yup from 'yup';

export interface VerifyEmailDialogFormValue {
  code: string;
}

export const verifyEmailDialogFormSchema = yup.object().shape({
  code: codeSchema,
});
