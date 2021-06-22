import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const OrderMobile = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box display='flex' flexDirection='column' my={2}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          mt={2}>
          <Typography className={classes.leading}>Thời gian</Typography>
          <Box width={120}>
            <Typography align='right'>{data.time}</Typography>
          </Box>
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
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Loại</Typography>
          <Typography>{data.type}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'>
          <Typography className={classes.leading}>Số lượng</Typography>
          <Typography>{data.quantity}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          mt={1}
          mb={2}>
          <Typography className={classes.leading}>Tổng tiền (VND)</Typography>
          <Typography>{data.total}</Typography>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default OrderMobile;
