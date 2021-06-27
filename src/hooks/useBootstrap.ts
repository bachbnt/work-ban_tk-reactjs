import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { toast } from 'src/utils/toast';
import { RootState } from 'src/redux/rootState';
import useSignOut from './useSignOut';
import useAuth from './useAuth';

const useBootstrap = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useAuth();
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const { signOut } = useSignOut();

  useEffect(() => {
    if (auth.isSignedIn() && !userReducer?.isVerified) {
      signOut();
    }
  }, [auth, signOut, userReducer]);

  const bootstrap = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      if (auth.isSignedIn() && !userReducer?.isVerified) {
        await signOut();
      }
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, dispatch, signOut, userReducer, auth]);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  return { bootstrap };
};

export default useBootstrap;
