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
];

export const privates: RouteProps[] = [
  {
    path: RouteName.HOME,
    component: 'home',
  },
];
