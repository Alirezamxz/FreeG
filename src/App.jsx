import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Game } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <main className="container mx-auto p-10 lg:p-16">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id" component={Game} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
