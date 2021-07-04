import useAuth from 'src/hooks/useAuth';
import BaseRoute from './baseRoute';
import { RouteName } from './routeName';
import { RouteProps } from './routeProps';
import { Redirect } from 'react-router';

const AuthedAdminRoute = (props: RouteProps) => {
  const auth = useAuth();

  if (!auth.isSignedIn()) {
    return <Redirect to={{ pathname: RouteName.ADMIN }} />;
  }
  if (auth.isSignedIn() && !auth.isAdmin()) {
    return <Redirect to={{ pathname: RouteName.HOME }} />;
  }
  return <BaseRoute {...props} />;
};

export default AuthedAdminRoute;
