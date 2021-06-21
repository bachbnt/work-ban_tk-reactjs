import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';
import variables from 'src/themes/variables';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    avatarContainer: {
      position: 'relative',
      marginTop: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: 30,
    },
    avatar: {
      width: 100,
      height: 100,
    },
    fileInput: {
      display: 'none',
    },
    cameraIconContainer: {
      zIndex: 5,
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: theme.variables.borderRadiusCircle,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 10,
      overflow: 'hidden',
      color: theme.palette.common.white,
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        height: '66.666667%',
        zIndex: -1,
      },
    },
    cameraIcon: {
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    },
    removeIcon: {
      position: 'absolute',
      top: 4,
      right: -2,
      backgroundColor: theme.colors.white,
      color: theme.palette.primary.main,
      borderRadius: variables.borderRadiusCircle,
      zIndex: 10,
      '&:hover': {
        color: theme.colors.error,
        cursor: 'pointer',
      },
    },
  })
);
