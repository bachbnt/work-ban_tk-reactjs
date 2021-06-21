import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';
import variables from 'src/themes/variables';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    dialog: {
      '& .MuiDialog-paperWidthSm': {
        borderRadius: theme.variables.borderRadius,
        boxShadow: theme.variables.boxShadowCard,
      },
    },
    button: {
      margin: 'auto',
      minWidth: variables.buttonMinWidth,
      height: theme.spacing(5),
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  })
);
