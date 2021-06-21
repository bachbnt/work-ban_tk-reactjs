import * as yup from 'yup';
import { emailSchema, passwordSchema } from 'src/utils/validation';

export interface SignInFormValue {
  email: string;
  password: string;
}

export const signInFormSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
