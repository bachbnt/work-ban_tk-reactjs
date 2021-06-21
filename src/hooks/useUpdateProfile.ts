import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { i18nKey } from 'src/locales/i18n';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { SET_USER } from 'src/redux/user/userAction';
import { userService } from 'src/services/userService';
import { toast } from 'src/utils/toast';

const useUpdateProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const updateProfile = useCallback(
    async (firstName?: string, lastName?: string, dateOfBirth?: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await userService.updateProfile({
          firstName,
          lastName,
        });
        dispatch({ type: SET_USER, payload: response.data });
        toast.success(t(i18nKey.success));
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { updateProfile };
};

export default useUpdateProfile;
