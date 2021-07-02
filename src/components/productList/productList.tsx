import { Grid, Hidden } from '@material-ui/core';
import { Box, Typography, IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Product from 'src/components/product';
import ProductMobile from 'src/components/productMobile';
import clsx from 'clsx';
import { Props } from './props';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { useState } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import useCountryList from 'src/hooks/useCountryList';

const ProductList = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const countryListReducer = useSelector(
    (state: RootState) => state.countryListReducer
  );
  const categoryReducer = useSelector(
    (state: RootState) => state.categoryReducer
  );
  const { getData: getCountryList } = useCountryList();

  return (
    <>
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
        {countryListReducer?.data.map((item) => (
          <Product data={item} />
        ))}
      </Hidden>
      <Hidden smUp>
        {countryListReducer?.data.map((item) => (
          <ProductMobile data={item} />
        ))}
      </Hidden>
      <Box display='flex' justifyContent='center'>
        <Grid container xs={12} md={4} alignItems='center'>
          <Grid item xs={3}>
            {currentPage > 1 && (
              <IconButton
                onClick={async () => {
                  await getCountryList(categoryReducer?.id, currentPage - 1);
                  setCurrentPage(currentPage - 1);
                }}>
                <NavigateBefore color='primary' />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography>{`${currentPage}/${countryListReducer?.total}`}</Typography>
          </Grid>
          <Grid item xs={3}>
            {currentPage < countryListReducer?.total! && (
              <IconButton
                onClick={async () => {
                  await getCountryList(categoryReducer?.id, currentPage + 1);
                  setCurrentPage(currentPage + 1);
                }}>
                <NavigateNext color='primary' />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;
