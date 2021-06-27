import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      width: 480,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    button: {
      color: theme.colors.black,
    },
  })
);
