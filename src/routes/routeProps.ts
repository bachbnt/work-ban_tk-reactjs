import { RouteName } from './routeName';

export interface RouteProps {
  path: RouteName;
  component: string;
  exact?: boolean;
}

export const publics: RouteProps[] = [
  {
    path: RouteName.SIGN_IN,
    component: 'signIn',
  },
  {
    path: RouteName.SIGN_UP,
    component: 'signUp',
  },
  {
    path: RouteName.FORGOT_PASSWORD,
    component: 'forgotPassword',
  },
];

export const privates: RouteProps[] = [
  {
    path: RouteName.HOME,
    component: 'home',
  },
  {
    path: RouteName.ACCOUNT_SETTING,
    component: 'accountSetting',
  },
];
