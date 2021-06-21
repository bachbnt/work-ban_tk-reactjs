import {
  confirmPasswordSchema,
  emailSchema,
  passwordSchema,
  phoneSchema,
  usernameSchema,
} from 'src/utils/validation';
import * as yup from 'yup';

export interface SignUpDialogFormValue {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export const signUpDialogFormSchema = yup.object().shape({
  username: usernameSchema,
  email: emailSchema,
  phone: phoneSchema,
  password: passwordSchema,
});
