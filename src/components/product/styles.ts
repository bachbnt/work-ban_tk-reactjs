import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    button: {
      backgroundColor: theme.colors.green,
      width: 100,
      minWidth: 80,
      height: 40,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.colors.greenDark,
      },
    },
    divider: {
      backgroundColor: theme.colors.grey500,
      width: '100%',
      marginTop: theme.spacing(1),
    },
    textField: {
      width: 100,
      '& .MuiInputBase-root': {
        color: theme.colors.drawerBackground,
      },
      '& .MuiFormLabel-root': {
        color: theme.colors.drawerBackground,
        '&.Mui-focused': {
          color: theme.colors.drawerBackground,
        },
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.colors.drawerBackground,
          borderWidth: 1,
        },
        '&:hover fieldset': {
          borderColor: theme.colors.drawerBackground,
          borderWidth: 1,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.colors.drawerBackground,
          borderWidth: 1,
        },
      },
      '& .MuiOutlinedInput-input': {
        color: theme.colors.black,
        padding: '8px 14px 8px 14px',
      },
    },
  })
);
