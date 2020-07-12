import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";
import { AppState } from "../../configureStore";
import { UserState } from "../../redux/user/userState";

export interface GuestRouteProps extends PropsWithChildren<any> {}

const GuestRoute: React.SFC<GuestRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const userData = useSelector(
    (state: AppState): UserState => state.userReducer
  );
  const isUser = userData.user.id.length > 0;
  return (
    <Route
      {...rest}
      render={(props) =>
        isUser ? (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default GuestRoute;
