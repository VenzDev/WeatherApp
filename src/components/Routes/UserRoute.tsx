import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";

export interface UserRouteProps extends PropsWithChildren<any> {}

const UserRoute: React.SFC<UserRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const userData = useSelector((state: any) => state.userReducer);
  const isUser = Object.keys(userData.user).length > 0;
  console.log(isUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        isUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default UserRoute;
