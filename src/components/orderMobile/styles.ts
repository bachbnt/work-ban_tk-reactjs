import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    leading: {
      marginRight: 4,
    },
    divider: {
      backgroundColor: theme.colors.grey500,
      width: '100%',
      marginTop: theme.spacing(1),
    },
  })
);
