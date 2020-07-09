import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "./pages/LoginPage";
import Wrapper from "./components/Wrapper";
import LoadingSpinner from "./components/LoadingSpinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Suspense
          fallback={
            <LoadingDiv>
              <LoadingSpinner />
            </LoadingDiv>
          }
        >
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/home" component={HomePage} />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
