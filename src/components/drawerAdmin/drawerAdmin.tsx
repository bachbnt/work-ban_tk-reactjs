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
import { ExitToApp, MenuOpen } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { startCase } from 'lodash';
import { Config } from 'src/configs/config';
import { RootState } from 'src/redux/rootState';
import { TOGGLE_DRAWER } from 'src/redux/drawer/drawerAction';
import { DrawerAdminRoute, Props } from './props';
import useStyles from './styles';
import useAuth from 'src/hooks/useAuth';
import useSignOut from 'src/hooks/useSignOut';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import { RouteName } from 'src/routes/routeName';
import { useHistory, useLocation } from 'react-router-dom';

const routes: DrawerAdminRoute[] = [
  {
    title: 'Upload Product',
    name: RouteName.UPLOAD_PRODUCT,
  },
  {
    title: 'Add Category',
    name: RouteName.ADD_CATEGORY,
  },
  {
    title: 'Add Product Type',
    name: RouteName.ADD_COUNTRY,
  },
  {
    title: 'Product Management',
    name: RouteName.PRODUCT_MANAGEMENT,
  },
  {
    title: 'User Management',
    name: RouteName.USER_MANAGEMENT,
  },
  {
    title: 'Web Config',
    name: RouteName.CONFIG,
  },
];

const DrawerAdmin = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();
  const { signOut } = useSignOut();
  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const history = useHistory();
  const location = useLocation();
  const open = drawerReducer.open;

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const clickSignIn = () => {
    dispatch({ type: TOGGLE_SIGN_IN });
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
        pt={3}
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
      <Box className={classes.container} px={open ? 4 : 3} pb={3}>
        <Typography variant='h3' color='primary' className={classes.otherText}>
          Admin
        </Typography>
      </Box>
      <Box px={2}>
        <Divider />
      </Box>
      {!auth.isSignedIn() && (
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
        </Box>
      )}
      <Box px={2}>
        <Divider />
      </Box>
      {auth.isSignedIn() && (
        <Box px={2} py={1}>
          <List>
            {routes.map((item, index) => (
              <ListItem
                key={index}
                button
                selected={item.name === location.pathname}
                className={clsx(classes.listItem, classes.routeItem)}
                onClick={() => {
                  history.push(item.name);
                }}>
                <ListItemText primary={startCase(t(item.title))} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

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

export default DrawerAdmin;
