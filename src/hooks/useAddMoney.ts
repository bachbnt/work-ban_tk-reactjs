import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { userService } from 'src/services/userService';
import { User } from 'src/models/user';
import useAuth from './useAuth';

const useAddMoney = (user: User) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataAdd, setData] = useState(user);
  const auth = useAuth();

  const addMoney = useCallback(
    async (money: number, id: string) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        debugger;
        if (!auth.isSignedIn()) {
          return;
        }
        const result = await userService.addMoney(money, id);
        if (result.status === 201) {
          toast.success('Đã cộng');
          setData(result.data);
          debugger;
        }
      } catch (error) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch]
  );

  return { dataAdd, addMoney };
};

export default useAddMoney;
