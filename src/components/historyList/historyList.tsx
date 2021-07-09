import { Hidden } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import History from '../history';
import HistoryMobile from '../historyMobile';
import clsx from 'clsx';
import { Props } from './props';
import useStyles from './styles';
import useHistoryList from 'src/hooks/useHistoryList';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from 'src/components/pagination';

const HistoryList = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, totalPage, getData: getHistoryList } = useHistoryList();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getHistoryList(currentPage);
  }, [getHistoryList, currentPage]);

  useEffect(() => {
    let timer = setInterval(() => {
      getHistoryList(currentPage);
    }, 60000);

    return () => clearInterval(timer);
  }, [getHistoryList, currentPage]);

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
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPrevious={async () => {
          await getHistoryList(currentPage - 1);
          setCurrentPage(currentPage - 1);
        }}
        onNext={async () => {
          await getHistoryList(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }}
      />
    </>
  );
};

export default HistoryList;
