import { Theme as MUITheme } from '@material-ui/core/styles';
import colors from './colors';
import styles from './styles';
import variables from './variables';

export type AppColor = typeof colors;
export type AppVariables = typeof variables;
export type AppStyle = typeof styles;

export interface AppTheme extends MUITheme {
  colors: AppColor;
  variables: AppVariables;
  styles: AppStyle;
}
