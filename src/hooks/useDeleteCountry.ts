import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { countryService } from 'src/services/countryService';

const useDeleteCountry = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const deleteCountry = useCallback(
    async (id: string) => {
      if (!auth.isSignedIn()) {
        return;
      }
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await countryService.deleteCountry(id);
        if (result.status === 200) {
          toast.success('Xoá thành công');
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { deleteCountry };
};

export default useDeleteCountry;
