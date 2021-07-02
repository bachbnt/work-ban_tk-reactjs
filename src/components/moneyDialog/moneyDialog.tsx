import {
  Box,
  Dialog,
  Grid,
  Link,
  Typography,
  Divider,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { Props } from './props';
import useStyles from './styles';

const MoneyDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onClose, open } = props;
  const bankInfoReducer = useSelector(
    (state: RootState) => state.bankInfoReducer
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <Box className={classes.container}>
        <Grid xs={12} container className={classes.messageContainer}>
          <Typography display='inline'>
            + Số tiền nạp tối thiểu là
            <Typography
              display='inline'
              className={classes.redText}>{` 50.000 VND`}</Typography>
          </Typography>
          <Typography display='inline'>
            + Copy chính xác nội dung chuyển khoản
          </Typography>

          <Typography display='inline' className={classes.redText}>
            + Nạp tiền sai nội dung sẽ bị trù 10% (tối đa 100k)
          </Typography>
          <Typography display='inline'>
            + Tất cả nạp không refund dưới mọi hình thức, nạp vừa đủ xài
          </Typography>
          <Typography display='inline'>
            + Mọi thắc mắc vui lòng liên hệ:
          </Typography>
          <Typography display='inline' className={classes.childText}>
            + Telegram: <Link className={classes.link}>ninh93</Link>
          </Typography>
          <Typography display='inline' className={classes.childText}>
            + Facebook: <Link className={classes.link}>Nguyễn Ninh</Link>
          </Typography>
        </Grid>
        <Box my={2} />
        <Grid xs={12} container className={classes.tabBar}>
          <Grid item xs={3} md={2}>
            <Typography className={classes.boldText} align='center'>
              Vietcombank
            </Typography>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
        <Box my={1} />
        <Grid container xs={12} className={classes.info}>
          <Grid xs={12} container>
            <Grid item xs={6}>
              <Typography>Ngân hàng:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.boldText}>
                {bankInfoReducer?.bankName}
              </Typography>
            </Grid>
          </Grid>
          <Box my={1} />
          <Grid xs={12} container>
            <Grid item xs={6}>
              <Typography>Số tài khoản:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.boldText}>
                {bankInfoReducer?.accountNumber}
              </Typography>
            </Grid>
          </Grid>
          <Box my={1} />
          <Grid xs={12} container>
            <Grid item xs={6}>
              <Typography>Tên tài khoản:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.boldText}>
                {bankInfoReducer?.accountName}
              </Typography>
            </Grid>
          </Grid>
          <Box my={1} />
          <Grid xs={12} container>
            <Grid item xs={6}>
              <Typography>Nội dung chuyển khoản:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.boldText}>
                {bankInfoReducer?.transferContent}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default MoneyDialog;
