import { TextField as MaterialTextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import { Props } from './props';
import useStyles from './styles';

const TextField = (props: Props) => {
  const classes = useStyles();
  const { label, ...others } = props;
  const { t } = useTranslation();

  return (
    <MaterialTextField
      classes={{ root: classes.root }}
      label={startCase(label as string)}
      fullWidth
      margin='normal'
      {...others}
    />
  );
};

export default TextField;
