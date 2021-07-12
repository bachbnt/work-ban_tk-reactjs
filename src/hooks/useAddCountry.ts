import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { countryService } from 'src/services/countryService';

const useAddCountry = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const createCountry = useCallback(
    async (
      countryName: string,
      countryCode: string,
      category: string,
      unitPrice: number,
      image: string,
      describe: string,
      isPublished: boolean
    ) => {
      if (!auth.isSignedIn()) {
        return;
      }
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await countryService.postCountry({
          countryName,
          countryCode,
          category,
          unitPrice,
          image,
          describe,
          isPublished,
        });
        if (result.status === 201) {
          toast.success('Thêm thành công');
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { createCountry };
};

export default useAddCountry;
