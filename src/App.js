import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import { CustomNavBar } from "./components/navbar";
import { Dashboard } from "./routes/pages/dashboard/index";
import { LoginForm } from "./components/login";
import { RegisterForm } from "./components/register";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
