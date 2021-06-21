import * as yup from 'yup';
import { confirmPasswordSchema, passwordSchema } from 'src/utils/validation';

export interface PasswordFormFormValue {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export const passwordFormFormSchema = yup.object().shape({
  currentPassword: passwordSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});
