import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    logo: {
      cursor: 'pointer',
      width: '100%',
    },
  })
);
