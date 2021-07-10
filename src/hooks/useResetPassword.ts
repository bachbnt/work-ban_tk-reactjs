import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { userService } from 'src/services/userService';
import useAuth from './useAuth';

const useResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const resetPassword = useCallback(
    async (id: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        if (!auth.isSignedIn()) {
          return;
        }
        const result = await userService.resetPassword(id);
        if (result.status === 200) {
          toast.success('Đã gửi');
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { resetPassword };
};

export default useResetPassword;
