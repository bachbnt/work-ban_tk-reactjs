import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const Order = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <Box width={100} mx={1}>
          <Typography>{data.time}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{data.description}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <Typography>{data.type}</Typography>
        </Box>
        <Box width={40} mx={1}>
          <Typography>{data.quantity}</Typography>
        </Box>
        <Box flex={1} mx={1}>
          <Typography>{data.total}</Typography>
        </Box>
        <Button classes={{ root: classes.button }}>Lấy dữ liệu</Button>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default Order;
