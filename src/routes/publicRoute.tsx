import BaseRoute from './baseRoute';
import { RouteProps } from './routeProps';

const PublicRoute = (props: RouteProps) => {
  return <BaseRoute {...props} />;
};

export default PublicRoute;
