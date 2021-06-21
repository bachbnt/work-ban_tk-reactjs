import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Layout from 'src/components/layout';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';
import useStyles from './styles';

const Home = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Layout main>
      <Typography>home</Typography>
    </Layout>
  );
};

export default Home;
