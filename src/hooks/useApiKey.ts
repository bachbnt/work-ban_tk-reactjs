import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { userService } from 'src/services/userService';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';

const useApiKey = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      if (!auth.isSignedIn()) {
        return;
      }
      const result = await userService.getApiKey();
      setData(result.data.apiKey);
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, dispatch, auth]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, getData };
};

export default useApiKey;
