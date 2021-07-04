import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'src/redux/rootState';
import useThemeStyles from 'src/themes/styles';
import { Props } from './props';
import useStyles from './styles';
import SignInDialog from '../signInDialog';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import DrawerAdmin from '../drawerAdmin';

const LayoutAdmin = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { children, main } = props;
  const dispatch = useDispatch();

  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const signInReducer = useSelector(
    (state: RootState) => state.signInDialogReducer
  );
  const openDrawer = drawerReducer.open;
  const openSignIn = signInReducer.open;

  const handleCloseSignIn = () => {
    if (openSignIn) {
      dispatch({ type: TOGGLE_SIGN_IN });
    }
  };

  return (
    <Box display='flex' className={classes.root}>
      <Box display='flex' flexDirection='column' className={classes.app}>
        {!!main && <DrawerAdmin />}
        <Box
          px={3}
          pb={3}
          className={clsx(classes.container, {
            [clsx(classes.main, {
              [themeClasses.drawerOpen]: openDrawer,
              [themeClasses.drawerClose]: !openDrawer,
            })]: main,
          })}>
          {children}
        </Box>
      </Box>
      <SignInDialog open={openSignIn} onClose={handleCloseSignIn} />
    </Box>
  );
};

export default LayoutAdmin;
