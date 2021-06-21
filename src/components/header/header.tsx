import { useRef, useState, MouseEvent, KeyboardEvent } from 'react';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { startCase } from 'lodash';
import CurrentDateTime from 'src/components/currentDateTime';
import OptionMenu from 'src/components/optionMenu';
import { RootState } from 'src/redux/rootState';
import useThemeStyles from 'src/themes/styles';
import { Props } from './props';
import useStyles from './styles';

const Header = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { title, dateTime } = props;
  const { t } = useTranslation();

  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const openDrawer = drawerReducer.open;

  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<any>(null);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = (event: MouseEvent<EventTarget>) => {
    if (ref.current && ref.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpenMenu(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  };

  return (
    <AppBar
      classes={{
        root: classes.appBarRoot,
        positionFixed: classes.positionFixed,
      }}
      className={clsx(classes.header, {
        [themeClasses.drawerOpen]: openDrawer,
        [themeClasses.drawerClose]: !openDrawer,
      })}
      position='fixed'
      color='inherit'
      elevation={0}>
      <Toolbar classes={{ root: classes.toolbarRoot }}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item>
            <Box display='flex' alignItems='center'>
              {title && (
                <Box ml={2}>
                  <Typography variant='h4'>{startCase(t(title))}</Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {!!dateTime && (
            <Grid item xs>
              <Box className={classes.dateTime}>
                <CurrentDateTime />
              </Box>
            </Grid>
          )}

          <Grid item>
            <Box display='flex' alignItems='center'>
              <IconButton
                edge='end'
                onClick={handleOpenMenu}
                color='inherit'
                ref={ref}>
                <ArrowDropDown />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <OptionMenu
          open={openMenu}
          onClose={handleCloseMenu}
          anchorRef={ref}
          onKeyDown={handleKeyDown}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
