import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Layout from 'src/components/layout';
import { Props } from './props';
import useStyles from './styles';

const SignIn = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Layout main>
      <Box />
    </Layout>
  );
};

export default SignIn;
