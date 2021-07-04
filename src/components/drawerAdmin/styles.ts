import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    drawer: {
      width: theme.variables.drawerOpenWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: theme.variables.drawerOpenWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      width: theme.variables.drawerCloseWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
    },
    paperAnchorDockedLeft: {
      border: '0 none',
      boxShadow: theme.variables.drawerBoxShadow,
    },
    container: {
      padding: 16,
    },
    menuOpenButtonRoot: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      marginLeft: theme.spacing(1),
    },
    menuOpenIconRoot: {
      transition: theme.transitions.create(['transform']),
    },
    menuOpenIcon: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      marginLeft: 8,
      marginRight: 12,
    },
    name: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.common.white,
    },
    otherText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    listItem: {
      overflow: 'hidden',
      borderRadius: theme.variables.borderRadius,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: theme.palette.common.black,
      '&:hover': {
        color: theme.palette.common.black,
        backgroundColor: theme.colors.primaryDark,
      },
    },
    footer: {
      position: 'fixed',
      bottom: 0,
    },
    routeItem: {
      height: 40,
    },
  })
);
