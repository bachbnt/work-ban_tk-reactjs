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
import { Dashboard, MenuOpen } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { startCase } from 'lodash';
import Avatar from 'src/components/avatar';
import { Config } from 'src/configs/config';
import { RootState } from 'src/redux/rootState';
import { TOGGLE_DRAWER } from 'src/redux/drawer/drawerAction';
import { RouteName } from 'src/routes/routeName';
import { i18nKey } from 'src/locales/i18n';
import { Props, DrawerRoute } from './props';
import useStyles from './styles';

const routes: DrawerRoute[] = [
  { title: i18nKey.dashboard, icon: <Dashboard />, name: RouteName.HOME },
];

const Drawer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const open = drawerReducer.open;

  const currentRoute = history.location.pathname;

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };

  const handleNavigate = (route: RouteName) => {
    history.push(route);
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
        textAlign='right'
        className={classes.container}
        px={open ? 4 : 3}
        py={1}>
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
      <Box className={classes.container} px={open ? 4 : 3} py={3}>
        <Typography className={clsx(classes.name)} variant='h3' color='primary'>
          {Config.APP_NAME}
        </Typography>
      </Box>
      <Box px={2}>
        <Divider />
      </Box>
      <Box className={classes.container} px={open ? 4 : 3} py={3}>
        <Box display='flex' alignItems='center'>
          <Avatar src={userReducer?.avatar} className={classes.avatar}>
            {userReducer?.firstName?.charAt(0)}
          </Avatar>
          <Typography
            variant='h4'
            className={clsx(
              classes.name
            )}>{`${userReducer?.firstName} ${userReducer?.lastName}`}</Typography>
        </Box>
      </Box>
      <Box px={2}>
        <Divider />
      </Box>
      <Box px={2} py={1}>
        <List>
          {routes.map((route, index) => (
            <ListItem
              key={index}
              button
              selected={route.name === currentRoute}
              className={clsx(classes.listItem)}
              onClick={() => {
                handleNavigate(route.name);
              }}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={startCase(t(route.title))} />
            </ListItem>
          ))}
        </List>
      </Box>
    </MaterialDrawer>
  );
};

export default Drawer;
