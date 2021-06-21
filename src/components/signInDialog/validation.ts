import { passwordSchema, usernameSchema } from 'src/utils/validation';
import * as yup from 'yup';

export interface SignInDialogFormValue {
  username: string;
  password: string;
}

export const signInDialogFormSchema = yup.object().shape({
  username: usernameSchema,
  password: passwordSchema,
});
