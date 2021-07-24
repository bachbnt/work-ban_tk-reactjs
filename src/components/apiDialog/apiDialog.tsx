import { Box, Dialog, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useApiKey from 'src/hooks/useApiKey';
import { Props } from './props';
import useStyles from './styles';

const ApiDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onClose, open } = props;
  const { data } = useApiKey();

  return (
    <Dialog onClose={onClose} open={open}>
      <Box className={classes.container}>
        <Grid xs={12} container className={classes.messageContainer}>
          <Typography display='inline'>
            {`+ API KEY CỦA BẠN LÀ: ${data}`}
          </Typography>
          <Typography display='inline'>
            + Lưu ý - không cung cấp API KEY của bạn cho người khác!
          </Typography>
          <Typography display='inline'>+ MUA ACCOUNT TRÊN HỆ THỐNG</Typography>
          <div className={classes.apiBlock}>
          <Typography display='block' variant='h5'>POST https://hotmail24h.com/api/product/customer/buy?api_key=YOUR_API_KEY"</Typography>
          <Typography display='block' >Body:</Typography>
          <Typography display='block' >{"{\"country\": \"60fbc1e3cc03cf7efec16cb1\",\"quantity\": 1}"}</Typography>
          <Typography display='block' >Kết quả:</Typography>
          <Typography display='block' >{"[{\"_id\": \"60fbc1f9cc03cf7efec16cb7\",\"data\": \"100069721482459|qEgfYsarBOrB|\nc_user=100069721482k479;xs=386:4AQVy8llax7bdA:2:16242677268:-1:-1\r\"}]"}</Typography>
          </div>
          <Typography display='inline'>
            + KIỂM TRA CÁC LOẠI TÀI KHOẢN + GIÁ + TỒN TRÊN HỆ THỐNG
            
          </Typography>
          <Typography display='inline'>
            - Lấy danh sách category
          </Typography>
          <div className={classes.apiBlock}>
          <Typography display='block' variant='h5'>GET https://hotmail24h.com/api/category</Typography>
          <Typography display='block' >Kết quả:</Typography>
          <Typography display='block' >{"[{\"_id\": \"60fbc1f9cc03cf7efec16cb7\",\"name\": \"Hotmail"}</Typography>
          </div>
          <Typography display='inline'>
            - Lấy danh sách country ứng với mỗi category
          </Typography>
          <div className={classes.apiBlock}>
          <Typography display='block' variant='h5'>GET https://hotmail24h.com/api/country?page=1&category=60fbbab70d5035220f9a1a52</Typography>
          <Typography display='block' >Kết quả:</Typography>
          <Typography display='block' >{"{\"data\": [{\"isPublished\": true,\"quantity\": 99,\"unitPrice\": 1,\"_id\": \"60fbc1e3cc03cf7efec16cb1\",\"countryCode\": \"Test1\",\"countryName\": \"Test1\",\"image\": \"http://www.google.com.vn\",\"describe\": \"HOHOHAHA\",\"__v\": 0}],\"totalPage\": 1,\"page\": 1}"}</Typography>
          </div>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ApiDialog;
