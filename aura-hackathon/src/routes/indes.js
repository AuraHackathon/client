import React from "react";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routesData";

const Routes = (
  <Switch>
    {publicRoutes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact
      />
    ))}
  </Switch>
);

export default Routes;
