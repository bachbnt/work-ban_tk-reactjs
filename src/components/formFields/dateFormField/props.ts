import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { KeyboardDatePickerProps } from '@material-ui/pickers';

export type Props = Omit<KeyboardDatePickerProps, 'onChange' | 'value'> & {
  name: string;
  value?: ParsableDate;
};
