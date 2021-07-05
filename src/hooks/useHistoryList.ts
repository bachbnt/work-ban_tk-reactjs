import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { historyService } from 'src/services/historyService';
import { History } from 'src/models/history';
import useAuth from './useAuth';

const useHistoryList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<History[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const auth = useAuth();

  const getData = useCallback(
    async (page?: number) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        if (!auth.isSignedIn()) {
          return;
        }
        const result = await historyService.getAll(page);
        setData(result.data);
        setTotalPage(result.totalPage);
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

export default useHistoryList;
