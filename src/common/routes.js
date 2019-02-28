
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const renderComponent = (route, match, history) => {
  class RouteContent extends React.Component {
    componentWillMount() {
      route.preProcess && route.preProcess();
    }

    render() {
      return (
        <route.component {...route.props} match={match} history={history} routes={route.routes}  />
      );
    }
  }

  return <RouteContent />;
};

export const renderRoutes = (routes) => {

  return routes
    ? <Switch>
        {
          routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              routes={route.routes}
              render={({ match, history  }) => renderComponent(route, match, history)}
            />
          ))
        }
      </Switch>
    : null;
};