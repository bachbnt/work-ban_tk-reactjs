import { Box, Typography, TextField, Divider } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import Button from '../button';
import useBuyProduct from 'src/hooks/useBuyProduct';
import { Props } from './props';
import useStyles from './styles';
import { toast } from 'src/utils/toast';

const ProductMobile = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, onBought } = props;
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const auth = useAuth();
  const { buyProduct } = useBuyProduct();

  const openSignIn = () => {
    dispatch({ type: TOGGLE_SIGN_IN });
  };

  const clickBuy = async (country: string) => {
    if (!auth.isSignedIn()) {
      openSignIn();
    } else if (count === 0) {
      toast.warn('Nhập số lượng');
    } else {
      await buyProduct(country, count, onBought);
    }
  };

  const handleChange = (event: any) => {
    setTotal(event.target.value * data.unitPrice);
    setCount(parseInt(event.target.value));
  };

  if (!data.isPublished) {
    return <div />;
  }

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box display='flex' flexDirection='column' my={2}>
        <img src={data.image} width={40} height={30} alt='product' />
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          mt={2}>
          <Typography className={classes.leading}>Quốc gia</Typography>
          <Typography>{data.countryCode}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Đơn giá</Typography>
          <Typography>{data.unitPrice}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Mô tả</Typography>
          <Box width={120}>
            <Typography align='right'>{data.describe}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'>
          <Typography className={classes.leading}>Còn lại</Typography>
          <Typography>{data.quantity}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Số lượng</Typography>
          <Box width={60} mx={1}>
            <TextField
              classes={{ root: classes.textField }}
              margin='none'
              inputMode='decimal'
              variant='outlined'
              type='number'
              defaultValue={0}
              InputProps={{ inputProps: { min: 0, max: data.quantity } }}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          mb={2}>
          <Typography className={classes.leading}>Tổng tiền (VND)</Typography>
          <Typography>{total}</Typography>
        </Box>
        <Box textAlign='right'>
          <Button
            onClick={async () => {
              await clickBuy(data._id);
            }}
            disabled={data.quantity === 0}
            classes={{
              root: classes.button,
            }}>{`Mua ${data.countryCode}`}</Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default ProductMobile;
