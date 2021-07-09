import { Box, Typography, Divider } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import TextField from '../textField';
import { Props } from './props';
import useStyles from './styles';

const User = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;
  const [count, setCount] = useState();

  const handleChange = (event: any) => {
    setCount(event.target.value);
  };
  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <Box width={100} mx={1}>
          <Typography>{data.username}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{data.email}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <Typography>{data.phone}</Typography>
        </Box>
        <Box width={40} mx={1}>
          <Typography>{`${data.isVerified}`}</Typography>
        </Box>
        <Box flex={1} mx={1}>
          <Typography>{data.balance}</Typography>
        </Box>
        <Box
          width={150}
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'>
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
          <Box display='flex' flexDirection='column' ml={1}>
            <Button classes={{ root: classes.button }}>+</Button>
            <Box my={0.5} />
            <Button classes={{ root: classes.button }}>-</Button>
          </Box>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default User;
