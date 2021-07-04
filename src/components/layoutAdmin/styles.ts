import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      background: theme.colors.background,
      minHeight: '100vh',
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.background,
      height: '100%',
      minHeight: '100vh',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.variables.headerHeight,
      minHeight: `calc(100vh - ${theme.variables.headerHeight}px - ${theme.variables.footerHeight}px)`,
    },
  })
);
