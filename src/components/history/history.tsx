import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const History = (props: Props) => {
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
          <Typography>{new Date(data.createdAt).toLocaleString()}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{data.describe}</Typography>
        </Box>
        <Box width={100} mx={1}>
          <Typography>{data.categoryName}</Typography>
        </Box>
        <Box width={40} mx={1}>
          <Typography>{data.quantity}</Typography>
        </Box>
        <Box flex={1} mx={1}>
          <Typography>{data.totalAmount}</Typography>
        </Box>
        <Button classes={{ root: classes.button }}>Lấy dữ liệu</Button>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default History;
