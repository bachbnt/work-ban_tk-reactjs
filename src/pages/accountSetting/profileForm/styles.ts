import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    paper: {
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 12,
      paddingRight: 12,
    },
    fieldContainer: {
      margin: 0,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(2),
      },
    },
    title: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
    button: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'right',
      },
    },
  })
);
