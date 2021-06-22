import { Constant } from 'src/constants/constant';

const en = {
  sign_in: 'sign in',
  sign_up: 'sign up',
  sign_out: 'sign out',
  dashboard: 'dashboard',
  profile: 'profile',

  username: 'username',
  email_address: 'email address',
  phone_number: 'phone number',
  password: 'password',
  confirm_password: 'confirm password',
  code: 'code',

  // Message
  dont_have_an_account: "Don't have an account?",
  already_have_an_account: 'Already have an account?',
  by_clicking_sign_up_you_agree_to_our: 'By clicking sign up, you agree to our',
  and: 'and',
  copyright_by: 'Copyright © {{year}} by {{author}}',
  invalid_file_type: 'Invalid file type',
  success: 'Success',
  failure: 'Failure',

  // Validate username
  username_min_length: `username must contain at least ${Constant.USERNAME_MIN_LENGTH} characters`,
  username_max_length: `username must contain at most ${Constant.USERNAME_MAX_LENGTH} characters`,
  username_required: 'username is required',

  // Validate email address
  email_address_invalid: 'email address is invalid',
  email_address_required: 'email address is required',

  // Validate phone number
  phone_number_invalid: 'phone number is invalid',
  phone_number_min_length: `phone number must contain at least ${Constant.PHONE_NUMBER_MIN_LENGTH} numbers`,
  phone_number_max_length: `phone number contain at most ${Constant.PHONE_NUMBER_MAX_LENGTH} numbers`,
  phone_number_required: 'phone number is required',

  // Validate password
  password_min_length: `password must contain at least ${Constant.PASSWORD_MIN_LENGTH} characters`,
  password_max_length: `password must contain at most ${Constant.PASSWORD_MAX_LENGTH} characters`,
  password_required: 'password is required',
  confirm_password_required: 'confirm password is required',
  password_not_match: 'confirm password does not match with password',
  password_not_one_of:
    'new password must be different from the current password',

  // Validate code
  code_length: `code must contain ${Constant.CODE_LENGTH} characters`,
  code_required: 'code is required',
};

export default en;
