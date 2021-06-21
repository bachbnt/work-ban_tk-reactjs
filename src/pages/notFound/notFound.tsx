import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const NotFound = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box>
      <Typography>NotFound</Typography>
    </Box>
  );
};

export default NotFound;
