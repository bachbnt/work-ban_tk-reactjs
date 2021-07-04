import { RouteName } from './routeName';

export interface RouteProps {
  path: RouteName;
  component: string;
  exact?: boolean;
}

export const users: RouteProps[] = [
  {
    path: RouteName.HOME,
    component: 'home',
  },
];

export const admins: RouteProps[] = [
  {
    path: RouteName.ADMIN,
    component: 'admin',
  },
];

export const authedAdmins: RouteProps[] = [
  {
    path: RouteName.UPLOAD_PRODUCT,
    component: 'adminUploadProduct',
  },
  {
    path: RouteName.ADD_CATEGORY,
    component: 'adminAddCategory',
  },
  {
    path: RouteName.USER_MANAGEMENT,
    component: 'adminUserManagement',
  },
  {
    path: RouteName.PRODUCT_MANAGEMENT,
    component: 'adminProductManagement',
  },
  {
    path: RouteName.CONFIG,
    component: 'adminConfig',
  },
];
