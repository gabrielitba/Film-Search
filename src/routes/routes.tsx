import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Loading from '../components/Loading';

const Details = lazy(() => import('../pages/Details'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Home = lazy(() => import('../pages/Home'));

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading typeLoading="spinner" />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/details" component={Details} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
