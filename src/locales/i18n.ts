import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Constant } from 'src/constants/constant';
import en from './en';
import vi from './vi';

const resources = { en, vi };

i18n.use(initReactI18next).init({
  debug: false,
  resources: resources,
});

export default i18n;
export const i18nKey = resources[Constant.LANGUAGE_EN];
