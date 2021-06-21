import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const Order = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box>
      <Typography>Order</Typography>
    </Box>
  );
};

export default Order;
