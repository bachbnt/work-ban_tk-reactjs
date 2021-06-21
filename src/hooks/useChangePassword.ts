import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { i18nKey } from 'src/locales/i18n';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { userService } from 'src/services/userService';
import { toast } from 'src/utils/toast';

const useChangePassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const changePassword = useCallback(
    async (currentPassword: string, password: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        await userService.changePassword({
          currentPassword,
          password,
        });
        toast.success(t(i18nKey.success));
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { changePassword };
};

export default useChangePassword;
