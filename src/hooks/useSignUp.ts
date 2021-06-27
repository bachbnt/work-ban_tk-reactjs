import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { TOGGLE_SIGN_UP } from 'src/redux/signUpDialog/signUpDialogAction';
import { SET_USER } from 'src/redux/user/userAction';
import { useHistory } from 'react-router-dom';
import useResendEmail from './useResendEmail';
import { RouteName } from 'src/routes/routeName';

const useSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();
  const history = useHistory();
  const { resendEmail } = useResendEmail();

  const signUp = useCallback(
    async (
      username: string,
      email: string,
      phone: string,
      password: string
    ) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await auth.signUp({
          username,
          email,
          phone,
          password,
        });
        if (result.status === 201) {
          toast.success('Đăng ký thành công');
          dispatch({ type: TOGGLE_SIGN_UP });
          debugger;
          if (result.data.user.isVerified) {
            dispatch({ type: SET_USER, payload: result.data.user });
            debugger;
            history.replace(RouteName.HOME);
          } else {
            await resendEmail();
            debugger;
          }
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth, resendEmail, history]
  );

  return { signUp };
};

export default useSignUp;
