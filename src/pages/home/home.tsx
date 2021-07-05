import { useTranslation } from 'react-i18next';
import FormCard from 'src/components/formCard';
import Layout from 'src/components/layout';
import { Props } from './props';
import useStyles from './styles';
import useBootstrap from 'src/hooks/useBootstrap';
import useHtmlNotification from 'src/hooks/useHtmlNotification';
import DOMPurify from 'dompurify';
import HistoryList from 'src/components/historyList';
import ProductList from 'src/components/productList';
import useAuth from 'src/hooks/useAuth';

const Home = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  useBootstrap();
  const { data: html } = useHtmlNotification();
  const auth = useAuth();

  return (
    <Layout main>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
      <FormCard>
        <ProductList />
        {auth.isSignedIn() && <HistoryList />}
      </FormCard>
    </Layout>
  );
};

export default Home;
