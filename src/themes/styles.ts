import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from './index';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    drawerOpen: {
      marginLeft: theme.variables.drawerCloseWidth,
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.variables.drawerOpenWidth,
      },
      transition: theme.transitions.create('margin-left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      marginLeft: theme.variables.drawerCloseWidth,
      transition: theme.transitions.create('margin-left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    toast: {
      fontFamily: 'inherit',
    },
    linkPrimary: {
      color: theme.palette.primary.main,
      transition: theme.transitions.create(['color']),
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
      transition: theme.transitions.create(['color']),
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    headerPublic: {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 15,
        paddingRight: 15,
        '& .MuiTypography-h2': {
          fontSize: 18,
        },
        '& .MuiGrid-item:last-child': {
          display: 'none',
        },
      },
    },
  })
);
