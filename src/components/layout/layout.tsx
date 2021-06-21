import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Drawer from 'src/components/drawer';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import { RootState } from 'src/redux/rootState';
import useThemeStyles from 'src/themes/styles';
import { Props } from './props';
import useStyles from './styles';

const Layout = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { children, title, main } = props;

  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const openDrawer = drawerReducer.open;

  return (
    <Box display='flex' className={classes.root}>
      <Box display='flex' flexDirection='column' className={classes.app}>
        {!!main && <Header title={title} dateTime />}
        {!!main && <Drawer />}
        <Box
          px={3}
          className={clsx(classes.container, {
            [clsx(classes.main, {
              [themeClasses.drawerOpen]: openDrawer,
              [themeClasses.drawerClose]: !openDrawer,
            })]: main,
          })}>
          {children}
        </Box>
        {!!main && <Footer />}
      </Box>
    </Box>
  );
};

export default Layout;
