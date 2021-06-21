import { Redirect } from 'react-router';
import useAuth from 'src/hooks/useAuth';
import BaseRoute from './baseRoute';
import { RouteName } from './routeName';
import { RouteProps } from './routeProps';

const PublicRoute = (props: RouteProps) => {
  const auth = useAuth();

  if (auth.isSignedIn()) {
    return <Redirect to={{ pathname: RouteName.HOME }} />;
  }

  return <BaseRoute {...props} />;
};

export default PublicRoute;
