import * as yup from 'yup';
import { Constant } from 'src/constants/constant';
import { i18nKey } from 'src/locales/i18n';

export const usernameSchema = yup
  .string()
  .min(Constant.USERNAME_MIN_LENGTH, i18nKey.username_min_length)
  .max(Constant.USERNAME_MAX_LENGTH, i18nKey.username_max_length)
  .required(i18nKey.username_required);

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
  .min(6, i18nKey.password_min_length)
  .max(20, i18nKey.password_max_length)
  .required(i18nKey.password_required);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], i18nKey.password_not_match)
  .required(i18nKey.confirm_password_required);
