import { Box, Dialog, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const ApiDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <Box className={classes.container}>
        <Grid xs={12} container className={classes.messageContainer}>
          <Typography display='inline'>
            + API KEY CỦA BẠN LÀ: 698123061244992818
          </Typography>

          <Typography display='inline'>
            + Lưu ý - không cung cấp API KEY của bạn cho người khác!
          </Typography>
          <Typography display='inline'>+ MUA ACCOUNT TRÊN HỆ THỐNG</Typography>
          <Typography display='inline'>
            + KIỂM TRA CÁC LOẠI TÀI KHOẢN + GIÁ + TỒN TRÊN HỆ THỐNG
          </Typography>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ApiDialog;
