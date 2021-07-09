import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const UserMobile = (props: Props) => {
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
          <Typography className={classes.leading}>Tài khoản</Typography>
          <Box width={120}>
            <Typography align='right'>{data.username}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Email</Typography>
          <Box width={120}>
            <Typography align='right'>{data.email}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>SĐT</Typography>
          <Typography>{data.phone}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'>
          <Typography className={classes.leading}>Xác thực</Typography>
          <Typography>{`${data.isVerified}`}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          mt={1}
          mb={2}>
          <Typography className={classes.leading}>Tiền (VNĐ)</Typography>
          <Typography>{data.balance}</Typography>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default UserMobile;
