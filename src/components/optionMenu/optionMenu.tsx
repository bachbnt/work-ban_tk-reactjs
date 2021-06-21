import {
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import useSignOut from 'src/hooks/useSignOut';
import { i18nKey } from 'src/locales/i18n';
import { RouteName } from 'src/routes/routeName';
import { OptionMenuRoute, Props } from './props';
import useStyles from './styles';

const routes: OptionMenuRoute[] = [
  { title: i18nKey.account_setting, name: RouteName.ACCOUNT_SETTING },
];

const OptionMenu = (props: Props) => {
  const classes = useStyles();
  const { open, onClose, anchorRef, onKeyDown } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const { signOut } = useSignOut();

  const handleNavigate = (route: RouteName) => {
    history.push(route);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal>
      <Paper className={classes.paper}>
        <ClickAwayListener onClickAway={onClose}>
          <MenuList
            autoFocusItem={open}
            id='menu-list-grow'
            onKeyDown={onKeyDown}>
            {routes.map((route) => (
              <MenuItem
                onClick={() => {
                  handleNavigate(route.name);
                }}>
                {startCase(t(route.title))}
              </MenuItem>
            ))}
            <MenuItem onClick={handleSignOut}>
              {startCase(t(i18nKey.sign_out))}
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};

export default OptionMenu;
