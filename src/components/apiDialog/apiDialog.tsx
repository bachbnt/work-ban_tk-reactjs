import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const ApiDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box>
      <Typography>ApiDialog</Typography>
    </Box>
  );
};

export default ApiDialog;
