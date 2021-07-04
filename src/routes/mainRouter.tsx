import { Switch } from 'react-router';
import NotFoundRoute from './notFoundRoute';
import UserRoute from './userRoute';
import { users, admins, authedAdmins } from './routeProps';
import AdminRoute from './adminRoute';
import AuthedAdminRoute from './authedAdminRoute';

const MainRouter = () => {
  return (
    <Switch>
      {users.map((route) => (
        <UserRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
      {admins.map((route) => (
        <AdminRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
      {authedAdmins.map((route) => (
        <AuthedAdminRoute
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
