import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RouteName } from 'src/routes/routeName';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { SET_USER } from 'src/redux/user/userAction';
import { SET_CATEGORY } from 'src/redux/category/cateroryAction';
import { SET_COUNTRY_LIST } from 'src/redux/countryList/countryListAction';

const useSignOut = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();
  const isAdmin = auth.isAdmin();
  const signOut = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      await auth.signOut({});
      dispatch({ type: SET_USER, payload: null });
      dispatch({ type: SET_CATEGORY, payload: null });
      dispatch({ type: SET_COUNTRY_LIST, payload: null });
      if (isAdmin) {
        history.replace(RouteName.ADMIN);
      } else {
        history.replace(RouteName.HOME);
      }
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, history, dispatch, auth, isAdmin]);

  return { signOut };
};

export default useSignOut;
