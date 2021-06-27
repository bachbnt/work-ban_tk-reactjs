import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RouteName } from 'src/routes/routeName';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { userService } from 'src/services/userService';
import { TOGGLE_VERIFY_EMAIL } from 'src/redux/verifyEmailDialog/verifyEmailDialogAction';
import { SET_USER } from 'src/redux/user/userAction';

const useVerifyEmail = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();

  const verifyEmail = useCallback(
    async (code: string) => {
      if (!auth.isSignedIn()) {
        return;
      }
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await userService.verifyEmail({ code });
        if (result.status === 200) {
          toast.success('Xác thực thành công');
          dispatch({ type: TOGGLE_VERIFY_EMAIL });
          dispatch({ type: SET_USER, payload: result.data });
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

  return { verifyEmail };
};

export default useVerifyEmail;
