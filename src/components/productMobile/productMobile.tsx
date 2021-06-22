import { Box, Typography, TextField, Divider } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const ProductMobile = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;
  const [total, setTotal] = useState(0);

  const handleChange = (event: any) => {
    setTotal(event.target.value * data.price);
  };

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box display='flex' flexDirection='column' my={2}>
        <img src={data.image} width={40} height={30} alt='product' />
        <Box
          width='100%'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          mt={2}>
          <Typography className={classes.leading}>Quốc gia</Typography>
          <Typography>{data.country}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Đơn giá</Typography>
          <Typography>{data.price}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Mô tả</Typography>
          <Box width={120}>
            <Typography align='right'>{data.description}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'>
          <Typography className={classes.leading}>Còn lại</Typography>
          <Typography>{data.remain}</Typography>
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
              InputProps={{ inputProps: { min: 0 } }}
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
            classes={{ root: classes.button }}>{`Mua ${data.country}`}</Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default ProductMobile;
