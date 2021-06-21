import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RouteName } from 'src/routes/routeName';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { userService } from 'src/services/userService';
import { i18nKey } from 'src/locales/i18n';

const useVerifyEmail = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();

  const getData = useCallback(
    async (code: string) => {
      if (!auth.isSignedIn()) {
        return;
      }

      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await userService.verifyEmail({ code });
        if (response.status === 200) {
          toast.error(t(i18nKey.success));
          history.replace(RouteName.HOME);
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, auth, dispatch, history]
  );

  return { getData };
};

export default useVerifyEmail;
