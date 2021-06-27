import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { userService } from 'src/services/userService';
import { TOGGLE_VERIFY_EMAIL } from 'src/redux/verifyEmailDialog/verifyEmailDialogAction';

const useResendEmail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const resendEmail = useCallback(async () => {
    if (!auth.isSignedIn()) {
      return;
    }

    dispatch({ type: SHOW_SPINNER });
    try {
      const result = await userService.resendEmail({});
      if (result.status === 200) {
        toast.success('Mã xác thực đã được gửi đến email. Vui lòng kiểm tra');
        dispatch({ type: TOGGLE_VERIFY_EMAIL });
      }
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, auth, dispatch]);

  return { resendEmail };
};

export default useResendEmail;
