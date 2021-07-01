import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { categoryService } from 'src/services/categoryService';
import { SET_CATEGORY } from 'src/redux/category/cateroryAction';
import { Category } from 'src/models/category';

const useCategoryList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<Category[]>([]);

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      const result = await categoryService.getAll();
      setData(result.data);
      dispatch({ type: SET_CATEGORY, payload: result.data[0].name });
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, getData };
};

export default useCategoryList;
