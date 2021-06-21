import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RouteName } from 'src/routes/routeName';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import useProfile from './useProfile';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';

const useSignIn = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();
  const { getData: getProfile } = useProfile();

  const signIn = useCallback(
    async (username: string, password: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        await auth.signIn({ username, password });
        await getProfile();
        dispatch({ type: TOGGLE_SIGN_IN });
        history.replace(RouteName.HOME);
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, history, dispatch, auth, getProfile]
  );

  return { signIn };
};

export default useSignIn;
