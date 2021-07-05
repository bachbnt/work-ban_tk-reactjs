import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { productService } from 'src/services/productService';
import { TOGGLE_BOUGHT } from 'src/redux/boughtDialog/boughtDialogAction';

const useBuyProduct = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [bought, setBought] = useState();

  const buyProduct = useCallback(
    async (country: string, quantity: number) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await productService.buyProduct(country, quantity);
        if (result.status === 200) {
          toast.success('Mua thành công');
          dispatch({ type: TOGGLE_BOUGHT });
          setBought(result.data);
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { bought, buyProduct };
};

export default useBuyProduct;
