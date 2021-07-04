import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { bankService } from 'src/services/bankService';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';

const useAdminBank = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const updateBank = useCallback(
    async (
      bankName: string,
      accountNumber: string,
      accountName: string,
      transferContent: string
    ) => {
      if (!auth.isSignedIn()) {
        return;
      }
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await bankService.putInfo({
          bankName,
          accountNumber,
          accountName,
          transferContent,
        });
        if (result.status === 200) {
          toast.success('Cập nhật thành công');
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { updateBank };
};

export default useAdminBank;
