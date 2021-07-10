import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  SET_DATA_HISTORY,
  TOGGLE_HISTORY_DIALOG,
} from 'src/redux/historyDialog/historyDialogAction';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const HistoryMobile = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;
  const dispatch = useDispatch();

  const handleGet = () => {
    dispatch({ type: SET_DATA_HISTORY, payload: data.products });
    dispatch({ type: TOGGLE_HISTORY_DIALOG });
  };

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
            <Typography align='right'>
              {new Date(data.createdAt).toLocaleString()}
            </Typography>
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
            <Typography align='right'>{data.describe}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Loại</Typography>
          <Typography>{data.categoryName}</Typography>
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
          <Typography>{data.totalAmount}</Typography>
        </Box>
        <Box textAlign='right'>
          <Button classes={{ root: classes.button }} onClick={handleGet}>
            Lấy dữ liệu
          </Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default HistoryMobile;
