import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";
import { AppState } from "../../configureStore";
import { UserState } from "../../redux/user/userState";

export interface UserRouteProps extends PropsWithChildren<any> {}

const UserRoute: React.SFC<UserRouteProps> = ({
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
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default UserRoute;
