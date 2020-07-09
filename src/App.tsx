import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Wrapper from "./components/Wrapper/Wrapper";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
