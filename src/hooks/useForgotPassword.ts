import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';

const useForgotPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const forgotPassword = useCallback(
    async (email: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        await auth.forgotPassword({ email });
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { forgotPassword };
};

export default useForgotPassword;
