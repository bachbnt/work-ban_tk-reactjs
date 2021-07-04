import useAuth from 'src/hooks/useAuth';
import BaseRoute from './baseRoute';
import { RouteProps } from './routeProps';
import { Redirect } from 'react-router';
import { RouteName } from './routeName';

const AdminRoute = (props: RouteProps) => {
  const auth = useAuth();

  if (auth.isSignedIn() && auth.isAdmin()) {
    return <Redirect to={{ pathname: RouteName.UPLOAD_PRODUCT }} />;
  }
  if (auth.isSignedIn() && !auth.isAdmin()) {
    return <Redirect to={{ pathname: RouteName.HOME }} />;
  }
  return <BaseRoute {...props} />;
};

export default AdminRoute;
