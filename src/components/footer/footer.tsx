import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Config } from 'src/configs/config';
import { RootState } from 'src/redux/rootState';
import { i18nKey } from 'src/locales/i18n';
import useThemeStyles from 'src/themes/styles';
import { Props } from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);
  const openDrawer = drawerReducer.open;

  return (
    <Box
      className={clsx(classes.footer, {
        [themeClasses.drawerOpen]: openDrawer,
        [themeClasses.drawerClose]: !openDrawer,
      })}>
      <Typography variant='body1'>
        {t(i18nKey.copyright_by, {
          year: new Date().getFullYear(),
          author: Config.APP_AUTHOR,
        })}
      </Typography>
    </Box>
  );
};

export default Footer;
