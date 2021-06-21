import { useEffect, useMemo } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { capitalize } from 'lodash';
import DatePicker from 'src/components/datePicker';
import { Props } from './props';

const DateFormField = (props: Props) => {
  const { register, errors, watch, setValue } = useFormContext();
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  useEffect(() => register({ name }), [register, name]);

  const binders = useMemo(() => {
    const error = !!errors[name];
    return {
      name,
      value: watch(name) || null,
      onChange: (date: MaterialUiPickersDate | null) => {
        setValue(
          name,
          !date
            ? null
            : date.toString() === 'Invalid Date'
            ? 'Invalid Date'
            : date.toISOString()
        );
      },
      error: error,
      helperText: error ? capitalize(t(errors[name].message)) : helperText,
    };
  }, [errors, helperText, name, setValue, t, watch]);

  return <DatePicker {...binders} {...others} />;
};

export default DateFormField;
