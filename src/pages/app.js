import React from "react";
import { Router } from "@reach/router";

import Profile from "../components/User/Profile";
import Details from "../components/User/Details";
import Login from "../components/User/Login";
import PrivateRoute from "../components/User/PrivateRoute";
import Status from "../components/User/Status";

const App = () => (
  <div>
    <Status />
    <Router>
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </div>
);

export default App;
