import React from "react";
import "./App.css";
import UserPage from "./pages/users";
import HomePage from "./pages/home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UserPage} />
    </Switch>
  );
}

export default App;
