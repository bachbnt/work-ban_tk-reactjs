import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    productContainer: {
      backgroundColor: theme.colors.productTitle,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    title: {
      color: theme.colors.white,
      fontWeight: 'normal',
    },
    orderContainer: {
      backgroundColor: theme.colors.productTitle,
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(1),
    },
    historyContainer: {
      backgroundColor: theme.colors.productTitle,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
  })
);
