import { Hidden } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import History from '../history/history';
import HistoryMobile from '../historyMobile';
import clsx from 'clsx';
import { Props } from './props';
import useStyles from './styles';

const HistoryList = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = props;

  return (
    <>
      <Hidden xsDown>
        <Box mt={4} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Lịch sử giao dịch
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          className={clsx(classes.historyContainer)}>
          <Box width={100} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Thời gian
            </Typography>
          </Box>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Mô tả
            </Typography>
          </Box>
          <Box width={100} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Loại
            </Typography>
          </Box>
          <Box width={40} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Số lượng
            </Typography>
          </Box>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Thành tiền
            </Typography>
          </Box>
          <Box width={100} />
        </Box>

        {data.map((item) => (
          <History data={item} />
        ))}
      </Hidden>

      <Hidden smUp>
        <Box mt={4} mb={2} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Lịch sử giao dịch
          </Typography>
        </Box>
        {data.map((item) => (
          <HistoryMobile data={item} />
        ))}
      </Hidden>
    </>
  );
};

export default HistoryList;
