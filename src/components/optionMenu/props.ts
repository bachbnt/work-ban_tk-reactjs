import { RouteName } from 'src/routes/routeName';

export interface Props {
  open: boolean;
  anchorRef: any;
  onClose: (event: React.MouseEvent<EventTarget>) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

export interface OptionMenuRoute {
  title: string;
  name: RouteName;
}
