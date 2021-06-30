import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import FormCard from 'src/components/formCard';
import HistoryList from 'src/components/historyList';
import Layout from 'src/components/layout';
import ProductList from 'src/components/productList';
import useHtmlNotification from 'src/hooks/useHtmlNotification';
import { Props } from './props';
import useStyles from './styles';

const data = [
  {
    _id: '',
    image:
      'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/chup-anh-san-pham-shynh2019-4.jpg',
    country: 'AU',
    price: 3000,
    description: 'Clone đã bật 2FA, xác thực bằng hotmail',
    remain: 3,
  },
  {
    _id: '',
    image:
      'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/chup-anh-san-pham-shynh2019-4.jpg',
    country: 'AU',
    price: 3000,
    description: 'Clone đã bật 2FA, xác thực bằng hotmail',
    remain: 3,
  },
  {
    _id: '',
    image:
      'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/chup-anh-san-pham-shynh2019-4.jpg',
    country: 'AU',
    price: 3000,
    description: 'Clone đã bật 2FA, xác thực bằng hotmail',
    remain: 3,
  },
  {
    _id: '',
    image:
      'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/chup-anh-san-pham-shynh2019-4.jpg',
    country: 'AU',
    price: 3000,
    description: 'Clone đã bật 2FA, xác thực bằng hotmail',
    remain: 3,
  },
  {
    _id: '',
    image:
      'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/chup-anh-san-pham-shynh2019-4.jpg',
    country: 'AU',
    price: 3000,
    description: 'Clone đã bật 2FA, xác thực bằng hotmail',
    remain: 3,
  },
];

const data2 = [
  {
    _id: '',
    time: '2021-06-09 16:26:30',
    description: 'Mua 20 nick face book clone da bat xa thuc hot mail',
    type: 'facebook',
    quantity: 20,
    total: 50000,
  },
  {
    _id: '',
    time: '2021-06-09 16:26:30',
    description: 'Mua 20 nick face book clone da bat xa thuc hot mail',
    type: 'facebook',
    quantity: 20,
    total: 50000,
  },
  {
    _id: '',
    time: '2021-06-09 16:26:30',
    description: 'Mua 20 nick face book clone da bat xa thuc hot mail',
    type: 'facebook',
    quantity: 20,
    total: 50000,
  },
  {
    _id: '',
    time: '2021-06-09 16:26:30',
    description: 'Mua 20 nick face book clone da bat xa thuc hot mail',
    type: 'facebook',
    quantity: 20,
    total: 50000,
  },
];

const SignIn = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data: html } = useHtmlNotification();

  return (
    <Layout main>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
      <FormCard>
        <ProductList data={data} />
        <HistoryList data={data2} />
      </FormCard>
    </Layout>
  );
};

export default SignIn;
