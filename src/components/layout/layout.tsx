import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Drawer from 'src/components/drawer';
import { RootState } from 'src/redux/rootState';
import useThemeStyles from 'src/themes/styles';
import { Props } from './props';
import useStyles from './styles';
import SignInDialog from '../signInDialog';
import SignUpDialog from '../signUpDialog';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import { TOGGLE_SIGN_UP } from 'src/redux/signUpDialog/signUpDialogAction';
import VerifyEmailDialog from '../verifyEmailDialog';
import MoneyDialog from '../moneyDialog';
import { TOGGLE_VERIFY_EMAIL } from 'src/redux/verifyEmailDialog/verifyEmailDialogAction';
import { TOGGLE_MONEY } from 'src/redux/moneyDialog/moneyDialogAction';
import ApiDialog from '../apiDialog';
import { TOGGLE_API } from 'src/redux/apiDialog/apiDialogAction';

const Layout = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { children, main } = props;
  const dispatch = useDispatch();

  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const signInReducer = useSelector(
    (state: RootState) => state.signInDialogReducer
  );
  const signUpReducer = useSelector(
    (state: RootState) => state.signUpDialogReducer
  );
  const verifyEmailReducer = useSelector(
    (state: RootState) => state.verifyEmailDialogReducer
  );
  const moneyReducer = useSelector(
    (state: RootState) => state.moneyDialogReducer
  );
  const apiReducer = useSelector((state: RootState) => state.apiDialogReducer);

  const openDrawer = drawerReducer.open;
  const openSignIn = signInReducer.open;
  const openSignUp = signUpReducer.open;
  const openVerifyEmail = verifyEmailReducer.open;
  const openMoney = moneyReducer.open;
  const openApi = apiReducer.open;

  const handleCloseSignIn = () => {
    if (openSignIn) {
      dispatch({ type: TOGGLE_SIGN_IN });
    }
  };

  const handleCloseSignUp = () => {
    if (openSignUp) {
      dispatch({ type: TOGGLE_SIGN_UP });
    }
  };

  const handleCloseVerifyEmail = () => {
    if (openVerifyEmail) {
      dispatch({ type: TOGGLE_VERIFY_EMAIL });
    }
  };

  const handleCloseMoney = () => {
    if (openMoney) {
      dispatch({ type: TOGGLE_MONEY });
    }
  };
  const handleCloseApi = () => {
    if (openApi) {
      dispatch({ type: TOGGLE_API });
    }
  };

  return (
    <Box display='flex' className={classes.root}>
      <Box display='flex' flexDirection='column' className={classes.app}>
        {!!main && <Drawer />}
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
      <SignUpDialog open={openSignUp} onClose={handleCloseSignUp} />
      <VerifyEmailDialog
        open={openVerifyEmail}
        onClose={handleCloseVerifyEmail}
      />
      <MoneyDialog open={openMoney} onClose={handleCloseMoney} />
      <ApiDialog open={openApi} onClose={handleCloseApi} />
    </Box>
  );
};

export default Layout;
