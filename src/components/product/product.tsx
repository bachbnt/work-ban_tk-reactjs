import { Box, Typography, Divider, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
import useBuyProduct from 'src/hooks/useBuyProduct';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const Product = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const auth = useAuth();
  const { bought, buyProduct } = useBuyProduct();

  const openSignIn = () => {
    dispatch({ type: TOGGLE_SIGN_IN });
  };

  const clickBuy = async (country: string) => {
    if (!auth.isSignedIn()) {
      openSignIn();
    } else {
      await buyProduct(country, count);
    }
  };

  const handleChange = (event: any) => {
    setTotal(event.target.value * data.unitPrice);
    setCount(event.target.value);
  };

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <img src={data.image} width={40} height={30} alt='product' />
        <Box width={40} mx={1}>
          <Typography>{data.countryCode}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <Typography>{data.unitPrice}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{data.describe}</Typography>
        </Box>
        <Box width={40} mx={1}>
          <Typography>{data.quality}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <TextField
            classes={{ root: classes.textField }}
            margin='none'
            inputMode='decimal'
            variant='outlined'
            type='number'
            defaultValue={0}
            InputProps={{ inputProps: { min: 0, max: data.quality } }}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Box>
        <Box flex={1} mx={1}>
          <Typography>{total}</Typography>
        </Box>
        <Button
          disabled={data.quality === 0}
          onClick={async () => {
            await clickBuy(data._id);
          }}
          classes={{
            root: classes.button,
          }}>{`Mua ${data.countryCode}`}</Button>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default Product;
