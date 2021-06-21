import { Box, Typography, Paper, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import { Props } from './props';
import useStyles from './styles';

const FormCard = (props: Props) => {
  const classes = useStyles();
  const { children, title, back = false } = props;
  const { t } = useTranslation();
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Paper elevation={0} className={classes.paper}>
          {!!back && (
            <Box mb={8} textAlign='left' className={classes.backButton}>
              <IconButton color='primary' onClick={handleClickBack}>
                <ArrowBack className={classes.backIcon} />
              </IconButton>
            </Box>
          )}
          {title && (
            <Box mb={8}>
              <Typography
                variant='h1'
                color='primary'
                className={classes.title}>
                {startCase(t(title))}
              </Typography>
            </Box>
          )}
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default FormCard;
