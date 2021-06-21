import { Box, Typography, Paper } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import { Props } from './props';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import clsx from 'clsx';

const FormCard = (props: Props) => {
  const classes = useStyles();
  const { children, title, back = false } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const openDrawer = drawerReducer.open;

  return (
    <Box className={classes.root}>
      <Box
        className={clsx(classes.container, {
          [classes.openDrawer]: openDrawer,
          [classes.closeDrawer]: !openDrawer,
        })}>
        <Paper elevation={0} className={classes.paper}>
          {title && (
            <Box mb={8}>
              <Typography
                variant='h1'
                color='primary'
                className={classes.title}>
                {startCase(t(title))}
              </Typography>
            </Box>
          )}
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default FormCard;
