import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { UserRoute, GuestRoute } from "./components/Routes";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer />
        <Suspense
          fallback={
            <LoadingDiv>
              <LoadingSpinner border="6px solid #fff" />
            </LoadingDiv>
          }
        >
          <Switch>
            <GuestRoute exact path="/" component={LoginPage} />
            <GuestRoute exact path="/register" component={RegisterPage} />
            <UserRoute exact path="/home" component={HomePage} />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
