export class Constant {
  static readonly DEFAULT_LANGUAGE = 'en';
  static readonly LANGUAGE_EN = 'en';
  static readonly LANGUAGE_VI = 'vi';

  static readonly NAME_PATTERN = /^['A-Z][A-Za-z'\-()& ]{1,20}$/;
  static readonly NUMBER_PATTERN = /.*\d/;

  static readonly USERNAME_MIN_LENGTH = 2;
  static readonly USERNAME_MAX_LENGTH = 20;
  static readonly PHONE_NUMBER_MIN_LENGTH = 10;
  static readonly PHONE_NUMBER_MAX_LENGTH = 11;
  static readonly PASSWORD_MIN_LENGTH = 6;
  static readonly PASSWORD_MAX_LENGTH = 20;

  static readonly CODE_LENGTH = 6;
}
