import { Box, Typography, Divider } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useAddMoney from 'src/hooks/useAddMoney';
import useCutMoney from 'src/hooks/useCutMoney';
import Button from '../button';
import TextField from '../textField';
import { Props } from './props';
import useStyles from './styles';

const User = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(data);

  const handleChange = (event: any) => {
    setCount(event.target.value);
  };

  const { dataAdd, addMoney } = useAddMoney(data);
  const { dataCut, cutMoney } = useCutMoney(data);

  const handleAdd = async () => {
    await addMoney(count * 1000, data._id);
    setUser(dataAdd);
  };

  const handleCut = async () => {
    await cutMoney(count * 1000, data._id);
    setUser(dataCut);
  };

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <Box width={100} mx={1}>
          <Typography>{user.username}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{user.email}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <Typography>{user.phone}</Typography>
        </Box>
        <Box width={40} mx={1}>
          <Typography>{`${user.isVerified}`}</Typography>
        </Box>
        <Box flex={1} mx={1}>
          <Typography>{user.balance}</Typography>
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
            <Button
              disabled={count === 0}
              classes={{ root: classes.button }}
              onClick={handleAdd}>
              +
            </Button>
            <Box my={0.5} />
            <Button
              disabled={count === 0}
              classes={{ root: classes.button }}
              onClick={handleCut}>
              -
            </Button>
          </Box>
        </Box>
        <Box width={100}>
          <Button classes={{ root: classes.resetButton }}>Reset MK</Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default User;
