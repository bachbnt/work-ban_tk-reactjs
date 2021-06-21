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
    },
    listItem: {
      overflow: 'hidden',
      borderRadius: theme.variables.borderRadius,
    },
  })
);
