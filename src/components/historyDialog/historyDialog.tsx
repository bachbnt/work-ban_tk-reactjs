import { Box, Dialog, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { Props } from './props';
import useStyles from './styles';

const HistoryDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onClose, open } = props;
  const historyReducer = useSelector(
    (state: RootState) => state.historyDialogReducer
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <Box className={classes.container}>
        {historyReducer.data.map((item) => (
          <Typography>{item.data}</Typography>
        ))}
      </Box>
    </Dialog>
  );
};

export default HistoryDialog;
