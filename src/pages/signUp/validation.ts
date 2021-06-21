import * as yup from 'yup';
import {
  confirmPasswordSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'src/utils/validation';

export interface SignUpFormValue {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export const signUpFormSchema = yup.object().shape({
  email: emailSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});
