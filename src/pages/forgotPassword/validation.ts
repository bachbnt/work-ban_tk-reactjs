import * as yup from 'yup';
import { emailSchema } from 'src/utils/validation';

export interface ForgotPasswordFormValue {
  email: string;
}

export const forgotPasswordFormSchema = yup.object().shape({
  email: emailSchema,
});
