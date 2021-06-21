import { Switch } from 'react-router';
import NotFoundRoute from './notFoundRoute';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { privates, publics } from './routeProps';

const MainRouter = () => {
  return (
    <Switch>
      {publics.map((route) => (
        <PublicRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
      {privates.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
      <NotFoundRoute />
    </Switch>
  );
};

export default MainRouter;
