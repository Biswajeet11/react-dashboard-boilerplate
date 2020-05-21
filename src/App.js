import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./App.scss";
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
      <Switch>
        <Layout>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/charts" component={Charts} exact={true} />
          <Route path="/tables" component={Table} exact={true} />
          <Route path="/401" component={Error401} exact={true} />
          <Route path="/404" component={Error404} exact={true} />
          <Route path="/500" component={Error500} exact={true} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
