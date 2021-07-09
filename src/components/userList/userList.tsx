import { Hidden } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import User from '../user';
import UserMobile from '../userMobile';
import clsx from 'clsx';
import { Props } from './props';
import useStyles from './styles';
import useUserList from 'src/hooks/useUserList';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from 'src/components/pagination';

const UserList = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, totalPage, getData: getUserList } = useUserList();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getUserList(currentPage);
  }, [getUserList, currentPage]);

  return (
    <>
      <Hidden xsDown>
        <Box mt={4} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Danh sách người dùng
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
              Tài khoản
            </Typography>
          </Box>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Email
            </Typography>
          </Box>
          <Box width={100} mx={1}>
            <Typography className={classes.title} variant='h5'>
              SĐT
            </Typography>
          </Box>
          <Box width={40} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Xác thực
            </Typography>
          </Box>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Tiền (VNĐ)
            </Typography>
          </Box>
          <Box width={150}>
            <Typography className={classes.title} variant='h5'>
              Cộng trừ (k VNĐ)
            </Typography>
          </Box>
        </Box>

        {data.map((item) => (
          <User data={item} />
        ))}
      </Hidden>

      <Hidden smUp>
        <Box mt={4} mb={2} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Danh sách người dùng
          </Typography>
        </Box>
        {data.map((item) => (
          <UserMobile data={item} />
        ))}
      </Hidden>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPrevious={async () => {
          await getUserList(currentPage - 1);
          setCurrentPage(currentPage - 1);
        }}
        onNext={async () => {
          await getUserList(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }}
      />
    </>
  );
};

export default UserList;
