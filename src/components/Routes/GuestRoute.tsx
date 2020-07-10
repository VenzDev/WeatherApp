import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";

export interface GuestRouteProps extends PropsWithChildren<any> {}

const GuestRoute: React.SFC<GuestRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const userData = useSelector((state: any) => state.userReducer);
  const isUser = Object.keys(userData.user).length > 0;
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
