import * as yup from 'yup';
import { Constant } from 'src/constants/constant';
import { i18nKey } from 'src/locales/i18n';

export const firstNameSchema = yup
  .string()
  .matches(Constant.NAME_PATTERN, i18nKey.first_name_general)
  .min(Constant.FIRST_NAME_MIN_LENGTH, i18nKey.first_name_min_length)
  .max(Constant.FIRST_NAME_MAX_LENGTH, i18nKey.first_name_max_length)
  .required(i18nKey.first_name_required);

export const lastNameSchema = yup
  .string()
  .matches(Constant.NAME_PATTERN, i18nKey.last_name_general)
  .min(Constant.LAST_NAME_MIN_LENGTH, i18nKey.last_name_min_length)
  .max(Constant.LAST_NAME_MAX_LENGTH, i18nKey.last_name_max_length)
  .required(i18nKey.last_name_required);

export const emailSchema = yup
  .string()
  .email(i18nKey.email_address_invalid)
  .required(i18nKey.email_address_required);

export const phoneSchema = yup
  .string()
  .matches(Constant.NUMBER_PATTERN, i18nKey.phone_number_invalid)
  .min(Constant.PHONE_NUMBER_MIN_LENGTH, i18nKey.phone_number_min_length)
  .max(Constant.PHONE_NUMBER_MAX_LENGTH, i18nKey.phone_number_max_length)
  .required(i18nKey.phone_number_required);

export const passwordSchema = yup
  .string()
  .matches(
    Constant.UPPERCASE_CHARACTER_PATTERN,
    i18nKey.password_require_uppercase_character
  )
  .matches(
    Constant.LOWERCASE_CHARACTER_PATTERN,
    i18nKey.password_require_lowercase_character
  )
  .matches(Constant.NUMBER_PATTERN, i18nKey.password_require_number)
  .matches(
    Constant.SPECIAL_CHARACTER_PATTERN,
    i18nKey.password_require_special_character
  )
  .min(6, i18nKey.password_min_length)
  .max(20, i18nKey.password_max_length)
  .required(i18nKey.password_required);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], i18nKey.password_not_match)
  .required(i18nKey.confirm_password_required);

export const dateOfBirthSchema = yup
  .date()
  .typeError(i18nKey.date_of_birth_invalid)
  .nullable()
  .required(i18nKey.date_of_birth_required)
  .test({
    exclusive: false,
    test: function (value: Date) {
      if (!value) {
        return true;
      }

      const { path, createError } = this;
      const currentDate = new Date();

      const minTime = new Date().setFullYear(
        currentDate.getFullYear() - Constant.MAX_AGE
      );

      if (value.getTime() < minTime) {
        return createError({
          path,
          message: i18nKey.date_of_birth_max_age,
        });
      }

      const maxTime = new Date().setFullYear(
        currentDate.getFullYear() - Constant.MIN_AGE
      );

      if (value.getTime() > maxTime) {
        return createError({
          path,
          message: i18nKey.date_of_birth_min_age,
        });
      }

      return true;
    },
  });
