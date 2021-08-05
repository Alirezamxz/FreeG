import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Game } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Game} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
