import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { SET_USER } from 'src/redux/user/userAction';
import { userService } from 'src/services/userService';

const useProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const getMe = useCallback(async () => {
    if (!auth.isSignedIn()) {
      return;
    }
    dispatch({ type: SHOW_SPINNER });
    try {
      const result = await userService.getMe();
      if (result.status === 200) {
        dispatch({ type: SET_USER, payload: result.data });
      }
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, dispatch, auth]);

  return { getMe };
};

export default useProfile;
