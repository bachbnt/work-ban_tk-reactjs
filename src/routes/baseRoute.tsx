import { lazy, Suspense, useMemo } from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'src/components/spinner/spinner';
import { RouteProps } from './routeProps';

const BaseRoute = (props: RouteProps) => {
  const { path, component, exact } = props;
  const Component = useMemo(() => {
    return lazy(() => import(`src/pages/${component}`));
  }, [component]);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        <Suspense fallback={<Spinner visible />}>
          <Component />
        </Suspense>
      )}
    />
  );
};

export default BaseRoute;
