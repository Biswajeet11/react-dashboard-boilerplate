import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./routes/pages/dashboard/index";
import Layout from "./components/layout";
import { Charts } from "./routes/pages/charts";
import { Table } from "./routes/pages/tables";
import { Error401 } from "./routes/pages/error/401error";
import { Error404 } from "./routes/pages/error/404error";
import { Error500 } from "./routes/pages/error/500error";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/charts" exact={true} component={Charts} />
          <Route path="/tables" exact={true} component={Table} />
          <Route path="/401" exact={true} component={Error401} />
          <Route path="/404" exact={true} component={Error404} />
          <Route path="/500" exact={true} component={Error500} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
