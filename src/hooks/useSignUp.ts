import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { i18nKey } from 'src/locales/i18n';
import { TOGGLE_SIGN_UP } from 'src/redux/signUpDialog/signUpDialogAction';

const useSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const signUp = useCallback(
    async (
      username: string,
      email: string,
      phone: string,
      password: string
    ) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await auth.signUp({
          username,
          email,
          phone,
          password,
        });
        if (response.status === 200) {
          toast.error(t(i18nKey.success));
        }
        dispatch({ type: TOGGLE_SIGN_UP });
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { signUp };
};

export default useSignUp;
