import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { productService } from 'src/services/productService';

const useUploadProduct = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();

  const uploadProduct = useCallback(
    async (file: any, country: string) => {
      if (!auth.isSignedIn()) {
        return;
      }
      dispatch({ type: SHOW_SPINNER });
      try {
        const data = new FormData();
        data.append('file', file);
        data.append('country', country);
        const result = await productService.uploadProduct(data);
        if (result.status === 201) {
          toast.success('Tải lên thành công');
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { uploadProduct };
};

export default useUploadProduct;
