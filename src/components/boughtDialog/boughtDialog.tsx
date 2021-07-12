import { Box, Dialog, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { Props } from './props';
import useStyles from './styles';

const BoughtDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onClose, open } = props;
  const boughtReducer = useSelector(
    (state: RootState) => state.boughtDialogReducer
  );

  console.log(boughtReducer.data);

  return (
    <Dialog onClose={onClose} open={open}>
      <Box my={6} textAlign='center'>
        <Typography variant='h3'>Nội dung đã mua</Typography>
      </Box>
      <Box className={classes.container}>
        {boughtReducer.data.map((item) => (
          <Typography>{item.data}</Typography>
        ))}
      </Box>
    </Dialog>
  );
};

export default BoughtDialog;
