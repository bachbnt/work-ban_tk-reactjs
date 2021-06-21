import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      borderRadius: '50%',
      textTransform: 'uppercase',
      position: 'relative',
      width: theme.variables.avatarSize,
      height: theme.variables.avatarSize,
    },
    colorDefault: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
    },
    img: {
      width: '100%',
      height: '100%',
    },
  })
);
