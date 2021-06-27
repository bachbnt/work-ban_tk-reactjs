import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Layout from 'src/components/layout';
import useHtmlNotification from 'src/hooks/useHtmlNotification';
import { Props } from './props';
import useStyles from './styles';

const SignIn = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { data } = useHtmlNotification();

  return (
    <Layout main>
      <Box />
    </Layout>
  );
};

export default SignIn;
