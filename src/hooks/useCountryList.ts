import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { countryService } from 'src/services/countryService';
import { Country } from 'src/models/country';
import { SET_COUNTRY_LIST } from 'src/redux/countryList/countryListAction';

const useCountryList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<Country[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const getData = useCallback(
    async (category?: string, page?: number) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await countryService.getAll(category, page);
        setData(result.data);
        dispatch({
          type: SET_COUNTRY_LIST,
          payload: { data: result.data, total: result.total },
        });
        setTotalPage(result.total);
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { data, totalPage, getData };
};

export default useCountryList;
