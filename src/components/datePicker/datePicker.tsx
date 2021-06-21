import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { startCase } from 'lodash';
import { Constant } from 'src/constants/constant';
import TextField from 'src/components/textField';
import { Props } from './props';
import useStyles from './styles';

const DatePicker = (props: Props) => {
  const { label, ...others } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={startCase(label as string)}
        placeholder={Constant.DATE_FORMAT}
        format={Constant.DATE_FORMAT}
        TextFieldComponent={TextField}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
