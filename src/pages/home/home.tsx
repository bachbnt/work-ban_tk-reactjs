import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import FormCard from 'src/components/formCard';
import Layout from 'src/components/layout';
import Product from 'src/components/product';
import ProductMobile from 'src/components/productMobile';
import Order from 'src/components/history';
import OrderMobile from 'src/components/historyMobile';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';
import useStyles from './styles';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { Hidden } from '@material-ui/core';

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

const Home = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const drawerReducer = useSelector((state: RootState) => state.drawerReducer);

  return (
    <Layout main>
      <FormCard>
        <Hidden xsDown>
          <Box
            display='flex'
            alignItems='center'
            flexDirection='row'
            className={clsx(classes.productContainer)}
            justifyContent='space-between'>
            <Box width={40} />
            <Box width={40} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Quốc gia
              </Typography>
            </Box>
            <Box width={100} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Đơn giá
              </Typography>
            </Box>
            <Box flex={1} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Mô tả
              </Typography>
            </Box>
            <Box width={40} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Còn lại
              </Typography>
            </Box>
            <Box width={100} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Số lượng
              </Typography>
            </Box>

            <Box flex={1} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Tổng tiền (VND)
              </Typography>
            </Box>
            <Box width={100} />
          </Box>
          {data.map((item) => (
            <Product data={item} />
          ))}

          <Box mt={4} className={clsx(classes.historyContainer)}>
            <Typography className={classes.title} variant='h5'>
              Lịch sử giao dịch
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            className={clsx(classes.orderContainer)}>
            <Box width={100} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Thời gian
              </Typography>
            </Box>
            <Box flex={1} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Mô tả
              </Typography>
            </Box>
            <Box width={100} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Loại
              </Typography>
            </Box>
            <Box width={40} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Số lượng
              </Typography>
            </Box>
            <Box flex={1} mx={1}>
              <Typography className={classes.title} variant='h5'>
                Thành tiền
              </Typography>
            </Box>
            <Box width={100} />
          </Box>

          {data2.map((item) => (
            <Order data={item} />
          ))}
        </Hidden>

        <Hidden smUp>
          {data.map((item) => (
            <ProductMobile data={item} />
          ))}
          <Box mt={4} mb={2} className={clsx(classes.historyContainer)}>
            <Typography className={classes.title} variant='h5'>
              Lịch sử giao dịch
            </Typography>
          </Box>
          {data2.map((item) => (
            <OrderMobile data={item} />
          ))}
        </Hidden>
      </FormCard>
    </Layout>
  );
};

export default Home;
