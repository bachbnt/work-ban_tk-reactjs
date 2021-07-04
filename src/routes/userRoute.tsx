import useAuth from 'src/hooks/useAuth';
import BaseRoute from './baseRoute';
import { RouteProps } from './routeProps';
import { Redirect } from 'react-router';
import { RouteName } from './routeName';

const UserRoute = (props: RouteProps) => {
  const auth = useAuth();
  if (auth.isSignedIn() && auth.isAdmin()) {
    return <Redirect to={{ pathname: RouteName.UPLOAD_PRODUCT }} />;
  }

  return <BaseRoute {...props} />;
};

export default UserRoute;
