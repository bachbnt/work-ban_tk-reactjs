import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { SET_BANK_INFO } from 'src/redux/bankInfo/bankInfoAction';
import { bankService } from 'src/services/bankService';
import { BankInfo } from 'src/models/bankInfo';

const useBankInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<BankInfo>();

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      const result = await bankService.getInfo();
      setData(result.data);
      dispatch({
        type: SET_BANK_INFO,
        payload: result.data,
      });
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

export default useBankInfo;
