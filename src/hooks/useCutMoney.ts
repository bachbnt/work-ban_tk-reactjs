import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { userService } from 'src/services/userService';
import { User } from 'src/models/user';
import useAuth from './useAuth';

const useCutMoney = (user: User) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataCut, setData] = useState(user);
  const auth = useAuth();

  const cutMoney = useCallback(
    async (money: number, id: string) => {
      if (!auth.isSignedIn()) {
        return;
      }
      dispatch({ type: SHOW_SPINNER });
      try {
        const result = await userService.cutMoney(money, id);
        if (result.status === 201) {
          toast.success('Đã trừ');
          setData(result.data);
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { dataCut, cutMoney };
};

export default useCutMoney;
