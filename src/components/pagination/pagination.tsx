import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const Pagination = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { currentPage, totalPage, onPrevious, onNext } = props;

  return (
    <Box display='flex' justifyContent='center'>
      <Grid container xs={12} md={4} alignItems='center'>
        <Grid item xs={3}>
          {currentPage > 1 && (
            <IconButton onClick={onPrevious}>
              <NavigateBefore color='primary' />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={6}>
          <Typography>{`${currentPage}/${totalPage}`}</Typography>
        </Grid>
        <Grid item xs={3}>
          {currentPage < totalPage && (
            <IconButton onClick={onNext}>
              <NavigateNext color='primary' />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pagination;
