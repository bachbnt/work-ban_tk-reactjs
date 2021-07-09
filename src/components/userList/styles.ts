import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    title: {
      color: theme.colors.white,
      fontWeight: 'normal',
    },
    historyContainer: {
      backgroundColor: theme.colors.productTitle,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
  })
);
