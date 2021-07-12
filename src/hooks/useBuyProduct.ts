import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { productService } from 'src/services/productService';
import { TOGGLE_BOUGHT_DIALOG } from 'src/redux/boughtDialog/boughtDialogAction';
import { SET_DATA_HISTORY } from 'src/redux/historyDialog/historyDialogAction';

const useBuyProduct = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const buyProduct = useCallback(
    async (country: string, quantity: number) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await productService.buyProduct(country, quantity);
        if (result.status === 200) {
          toast.success('Mua thành công');
          dispatch({ type: SET_DATA_HISTORY, payload: result.data });
          dispatch({ type: TOGGLE_BOUGHT_DIALOG });
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { buyProduct };
};

export default useBuyProduct;
