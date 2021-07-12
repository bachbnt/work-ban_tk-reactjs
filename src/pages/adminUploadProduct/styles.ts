import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
      color: theme.colors.black,
    },
  })
);
