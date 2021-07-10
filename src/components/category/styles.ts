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
  })
);
