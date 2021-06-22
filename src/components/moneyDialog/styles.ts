import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      width: 680,
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
    redText: {
      color: theme.colors.redDark,
    },
    boldText: {
      fontWeight: 'bold',
    },
    messageContainer: {
      backgroundColor: theme.colors.primary,
      flexDirection: 'column',
      width: 700,
      padding: 24,
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    childText: {
      marginLeft: 12,
    },
    tabBar: {
      paddingTop: 6,
      paddingBottom: 6,
    },
    divider: {
      backgroundColor: theme.colors.black,
      height: 2,
      width: '100%',
      marginTop: 4,
    },
    info: {
      paddingLeft: 12,
      paddingRight: 12,
    },
    link: {
      color: theme.colors.black,
      fontWeight: 'bold',
    },
  })
);
