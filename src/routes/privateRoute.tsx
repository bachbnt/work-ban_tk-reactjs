import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import useAuth from 'src/hooks/useAuth';
import { RootState } from 'src/redux/rootState';
import BaseRoute from './baseRoute';
import { RouteName } from './routeName';
import { RouteProps } from './routeProps';

const PrivateRoute = (props: RouteProps) => {
  const auth = useAuth();
  const userReducer = useSelector((state: RootState) => state.userReducer);

  if (!auth.isSignedIn() || userReducer?.isVerified) {
    return <Redirect to={{ pathname: RouteName.SIGN_IN }} />;
  }

  return <BaseRoute {...props} />;
};

export default PrivateRoute;
