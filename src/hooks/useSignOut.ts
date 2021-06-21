import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RouteName } from 'src/routes/routeName';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';

const useSignOut = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();

  const signOut = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      await auth.signOut({});
      history.replace(RouteName.SIGN_IN);
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, history, dispatch, auth]);

  return { signOut };
};

export default useSignOut;
