import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { categoryService } from 'src/services/categoryService';
import { SET_CATEGORY } from 'src/redux/category/cateroryAction';
import { Category } from 'src/models/category';
import useCountryList from './useCountryList';

const useCategoryList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<Category[]>([]);
  const { getData: getCountryList } = useCountryList();

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      const result = await categoryService.getCategories();
      setData(result.data);
      dispatch({
        type: SET_CATEGORY,
        payload: { id: result.data[0]._id, name: result.data[0].name },
      });
      await getCountryList(result.data[0]._id, 1);
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, dispatch, getCountryList]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, getData };
};

export default useCategoryList;
