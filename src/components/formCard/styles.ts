import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 480,
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: theme.variables.boxShadowPrimary,
      borderRadius: theme.variables.borderRadius,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    paper: {
      width: '100%',
      position: 'relative',
      flex: '1 1 auto',
      textAlign: 'center',
      padding: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
    },
    title: {},
    backButton: {},
    backIcon: {
      color: theme.palette.primary.main,
      margin: 0,
      padding: 0,
    },
  })
);
