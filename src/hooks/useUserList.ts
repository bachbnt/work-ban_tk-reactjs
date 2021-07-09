import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import useAuth from './useAuth';
import { userService } from 'src/services/userService';
import { User } from 'src/models/user';

const useUserList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<User[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const auth = useAuth();

  const getData = useCallback(
    async (page?: number) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        if (!auth.isSignedIn()) {
          return;
        }
        const result = await userService.getAll(page);
        setData(result.data);
        setTotalPage(result.totalPage);
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, auth]
  );

  return { data, totalPage, getData };
};

export default useUserList;
