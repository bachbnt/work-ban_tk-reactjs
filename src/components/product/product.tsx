import { Box, Typography, Divider, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const Product = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;
  const [total, setTotal] = useState(0);

  const handleChange = (event: any) => {
    setTotal(event.target.value * data.price);
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
          <Typography>{data.country}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <Typography>{data.price}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{data.description}</Typography>
        </Box>
        <Box width={40} mx={1}>
          <Typography>{data.remain}</Typography>
        </Box>
        <Box width={100} mx={1}>
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
        <Box flex={1} mx={1}>
          <Typography>{total}</Typography>
        </Box>
        <Button
          classes={{ root: classes.button }}>{`Mua ${data.country}`}</Button>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default Product;
