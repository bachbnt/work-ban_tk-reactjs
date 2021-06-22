import { RouteName } from 'src/routes/routeName';

export interface Props {}

export interface DrawerRoute {
  title: string;
  name: RouteName;
  onClick?: () => void;
}
