export interface UserSetting {
  theme: UserTheme;
  locale: UserLocale;
}

export enum UserTheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  DEFAULT = 'DEFAULT',
}

export enum UserLocale {
  EN = 'en',
  VI = 'vi',
  DEFAULT = 'DEFAULT',
}
