import {
  Box,
  Typography,
  Drawer as MaterialDrawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Assignment, ExitToApp, LocalAtm, MenuOpen } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { startCase } from 'lodash';
import { Config } from 'src/configs/config';
import { RootState } from 'src/redux/rootState';
import { TOGGLE_DRAWER } from 'src/redux/drawer/drawerAction';
import { RouteName } from 'src/routes/routeName';
import { Props, DrawerRoute } from './props';
import useStyles from './styles';
import useAuth from 'src/hooks/useAuth';
import useSignOut from 'src/hooks/useSignOut';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import { TOGGLE_SIGN_UP } from 'src/redux/signUpDialog/signUpDialogAction';
import { TOGGLE_MONEY } from 'src/redux/moneyDialog/moneyDialogAction';
import { TOGGLE_API } from 'src/redux/apiDialog/apiDialogAction';

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();
  const { signOut } = useSignOut();
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);

  const open = drawerReducer.open;

  const currentRoute = history.location.pathname;
  const routes: DrawerRoute[] = [
    { title: 'facebook', name: RouteName.HOME },
    { title: 'gmail', name: RouteName.GMAIL },
    { title: 'hotmail', name: RouteName.HOTMAIL },
    {
      title: 'tích hợp API',
      name: RouteName.API,
      onClick: () => {
        dispatch({ type: TOGGLE_API });
      },
    },
  ];
  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };

  const handleNavigate = (route: RouteName) => {
    history.push(route);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const clickSignIn = () => {
    dispatch({ type: TOGGLE_SIGN_IN });
  };
  const clickSignUp = () => {
    dispatch({ type: TOGGLE_SIGN_UP });
  };

  const clickMoney = () => {
    dispatch({ type: TOGGLE_MONEY });
  };

  return (
    <MaterialDrawer
      variant='permanent'
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
        paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
      }}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}>
      <Box
        className={classes.container}
        px={open ? 4 : 3}
        py={3}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'>
        <Typography variant='h3' color='primary' className={classes.otherText}>
          {Config.APP_NAME}
        </Typography>

        <IconButton
          classes={{ root: classes.menuOpenButtonRoot }}
          onClick={toggleDrawer}>
          <MenuOpen
            classes={{ root: classes.menuOpenIconRoot }}
            className={clsx(open && classes.menuOpenIcon)}
          />
        </IconButton>
      </Box>
      <Box px={2}>
        <Divider />
      </Box>
      {auth.isSignedIn() ? (
        <Box className={classes.container} px={open ? 4 : 3} py={3}>
          <Typography className={clsx(classes.name)} variant='h5'>
            {userReducer?.email}
          </Typography>
          <Box my={2}>
            <Typography variant='h4' color='primary'>
              0 VND
            </Typography>
          </Box>
          <ListItem
            key={'nt'}
            button
            className={clsx(classes.listItem, classes.button)}
            onClick={clickMoney}>
            <ListItemIcon>
              <LocalAtm />
            </ListItemIcon>
            <ListItemText primary={'Nạp tiền'} />
          </ListItem>
        </Box>
      ) : (
        <Box className={classes.container} px={open ? 4 : 3} py={3}>
          <ListItem
            key={'dn'}
            button
            className={clsx(classes.listItem, classes.button)}
            onClick={clickSignIn}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={'Đăng nhập'} />
          </ListItem>
          <Box py={0.5} />
          <ListItem
            key={'dn'}
            button
            className={clsx(classes.listItem, classes.button)}
            onClick={clickSignUp}>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary={'Đăng ký'} />
          </ListItem>
        </Box>
      )}
      <Box px={2}>
        <Divider />
      </Box>
      <Box px={2} py={1}>
        <List>
          {routes.map((route, index) => (
            <ListItem
              key={index}
              button
              selected={currentRoute === route.name}
              className={clsx(classes.listItem, classes.routeItem)}
              onClick={route.onClick}>
              <ListItemText primary={startCase(t(route.title))} />
            </ListItem>
          ))}
        </List>
      </Box>
      {auth.isSignedIn() && (
        <Box className={clsx(classes.container)} px={open ? 4 : 3} py={3}>
          <ListItem
            key={'dx'}
            button
            className={clsx(classes.listItem, classes.button)}
            onClick={handleSignOut}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={'Đăng xuất'} />
          </ListItem>
        </Box>
      )}
    </MaterialDrawer>
  );
};

export default Drawer;
