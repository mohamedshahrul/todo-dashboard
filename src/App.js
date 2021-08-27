import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter forceRefresh={true}>
      <div className="app">
        <Switch>
          <Route
            path="/"
            exact
            component={() =>
              !user ? <Redirect to="/login" /> : <Redirect to="/dashboard" />
            }
          />
          <Route path="/login" exact>
            {!user ? <Login /> : <Dashboard />}
          </Route>
          <Route path="/dashboard" exact>
            {!user ? <Login /> : <Dashboard />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
