import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Image } from 'src/constants/image';
import { i18nKey } from 'src/locales/i18n';
import { RouteName } from 'src/routes/routeName';
import { Props } from './props';
import useStyles from './styles';

const Logo = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const handleClick = () => {
    history.push(RouteName.HOME);
  };

  return (
    <img
      onClick={handleClick}
      className={classes.logo}
      src={Image.LOGO}
      alt={t(i18nKey.logo)}
    />
  );
};

export default Logo;
