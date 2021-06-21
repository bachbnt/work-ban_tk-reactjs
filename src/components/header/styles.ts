import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    appBarRoot: {
      backgroundColor: theme.colors.background,
    },
    positionFixed: {
      left: 0,
    },
    header: {
      width: 'auto',
    },
    toolbarRoot: {
      position: 'relative',
      height: theme.variables.headerHeight,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    dateTime: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  })
);
