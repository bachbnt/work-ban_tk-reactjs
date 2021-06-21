import { Backdrop, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { SpinnerState } from 'src/redux/spinner/spinnerState';
import { Props } from './props';
import useStyles from './styles';

const Spinner = (props: Props) => {
  const classes = useStyles();

  const spinnerReducer = useSelector<RootState, SpinnerState>(
    (state) => state.spinnerReducer
  );

  if (!props.visible && !spinnerReducer.visible) {
    return null;
  }

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color='primary' />
    </Backdrop>
  );
};

export default Spinner;
