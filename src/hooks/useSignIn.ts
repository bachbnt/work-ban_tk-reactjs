import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RouteName } from 'src/routes/routeName';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { TOGGLE_SIGN_IN } from 'src/redux/signInDialog/signInDialogAction';
import { SET_USER } from 'src/redux/user/userAction';
import useResendEmail from './useResendEmail';

const useSignIn = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useAuth();
  const { resendEmail } = useResendEmail();

  const signIn = useCallback(
    async (username: string, password: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await auth.signIn({ username, password });
        if (result.status === 201) {
          toast.success('Đăng nhập thành công');
          dispatch({ type: TOGGLE_SIGN_IN });
          if (auth.isAdmin()) {
            history.replace(RouteName.UPLOAD_PRODUCT);
          } else {
            if (result.data.user.isVerified) {
              dispatch({ type: SET_USER, payload: result.data.user });
              history.replace(RouteName.HOME);
            } else {
              await resendEmail();
            }
          }
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, history, dispatch, auth, resendEmail]
  );

  return { signIn };
};

export default useSignIn;
