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
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: theme.variables.boxShadowPrimary,
      borderRadius: theme.variables.borderRadius,
    },
    paper: {
      width: '100%',
      position: 'relative',
      flex: '1 1 auto',
      textAlign: 'center',
      padding: theme.spacing(8),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4),
      },
    },
    title: {},
    backButton: {},
    backIcon: {
      color: theme.palette.primary.main,
      margin: 0,
      padding: 0,
    },
    openDrawer: {
      width: 250,
      [theme.breakpoints.up('sm')]: {
        width: window.innerWidth - theme.variables.drawerOpenWidth - 100,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
    closeDrawer: {
      width: 250,
      [theme.breakpoints.up('sm')]: {
        width: window.innerWidth - theme.variables.drawerCloseWidth - 100,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    },
  })
);
