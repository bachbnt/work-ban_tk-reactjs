import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { productService } from 'src/services/productService';
import {
  SET_DATA_BOUGHT,
  TOGGLE_BOUGHT_DIALOG,
} from 'src/redux/boughtDialog/boughtDialogAction';
import useProfile from './useProfile';

const useBuyProduct = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { getMe } = useProfile();

  const buyProduct = useCallback(
    async (country: string, quantity: number, onSuccess: () => void) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await productService.buyProduct(country, quantity);
        if (result.status === 200) {
          toast.success('Mua thành công');
          dispatch({ type: SET_DATA_BOUGHT, payload: result.data });
          dispatch({ type: TOGGLE_BOUGHT_DIALOG });
          await getMe();
          onSuccess();
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, getMe]
  );

  return { buyProduct };
};

export default useBuyProduct;
