import * as yup from 'yup';
import {
  dateOfBirthSchema,
  firstNameSchema,
  lastNameSchema,
} from 'src/utils/validation';

export interface ProfileFormFormValue {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export const profileFormFormSchema = yup.object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  dateOfBirth: dateOfBirthSchema,
});
