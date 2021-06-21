import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { SET_USER } from 'src/redux/user/userAction';
import { userService } from 'src/services/userService';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';

const useProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const getData = useCallback(async () => {
    if (!auth.isSignedIn()) {
      return;
    }

    dispatch({ type: SHOW_SPINNER });
    try {
      const response = await userService.getProfile({});
      dispatch({ type: SET_USER, payload: response.data });
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, auth, dispatch]);

  return { getData };
};

export default useProfile;
