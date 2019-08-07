import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import routes from "config/routes";

export default () => (
  <BrowserRouter>
    {routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.path === "/"}
      />
    ))}
  </BrowserRouter>
);
