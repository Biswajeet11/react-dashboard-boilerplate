import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Dashboard } from "./routes/pages/dashboard/index";
import { LoginForm } from "../src/components/login/index";
import { RegisterForm } from "../src/components/register/index";
import { Charts } from "./routes/pages/charts";
import { Table } from "./routes/pages/tables";
import { Error401 } from "./routes/pages/error/401error";
import { Error404 } from "./routes/pages/error/404error";
import { Error500 } from "./routes/pages/error/500error";
import { AuthenticatedRoute } from "./routes/pages/auth/authenticated-route";
import { UnAuthenticatedRoute } from "./routes/pages/auth/unauthenticated-route";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute path="/" exact={true} component={Dashboard} />
        <AuthenticatedRoute path="/charts" exact={true} component={Charts} />
        <AuthenticatedRoute path="/tables" exact={true} component={Table} />
        <UnAuthenticatedRoute
          path="/login"
          exact={true}
          component={LoginForm}
        />
        <UnAuthenticatedRoute
          path="/register"
          exact={true}
          component={RegisterForm}
        />
        <UnAuthenticatedRoute path="/401" exact={true} component={Error401} />
        <UnAuthenticatedRoute path="/404" exact={true} component={Error404} />
        <UnAuthenticatedRoute path="/500" exact={true} component={Error500} />
        <UnAuthenticatedRoute component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
