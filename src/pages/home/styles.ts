import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    titleContainer: {
      backgroundColor: theme.colors.productTitle,
    },
    title: {
      color: theme.colors.white,
      fontWeight: 'normal',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  })
);
