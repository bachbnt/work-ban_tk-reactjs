import { Switch } from 'react-router';
import NotFoundRoute from './notFoundRoute';
import PublicRoute from './publicRoute';
import { publics } from './routeProps';

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
      <NotFoundRoute />
    </Switch>
  );
};

export default MainRouter;
