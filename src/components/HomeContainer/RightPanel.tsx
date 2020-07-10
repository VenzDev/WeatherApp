import React from "react";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../../images/avatar.png";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { user } from "../../redux/user";

export interface RightPanelProps extends RouteComponentProps<any> {}

const RightPanel: React.SFC<RightPanelProps> = ({ history }) => {
  const userData = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  console.log(userData);
  const date = new Date();
  const handleLogout = () => {
    dispatch(user.logout());
    history.push("/");
  };
  return (
    <>
      <div
        style={{ color: "white" }}
        className="row align-items-center justify-content-around p-4 my-4"
      >
        <button onClick={handleLogout} className="btn btn-primary mr-5">
          Logout
        </button>
        <h5>
          {userData.user.name} {userData.user.surname}
        </h5>
        <img alt="avatar" style={{ height: "50px" }} src={avatar} />
      </div>
      <div className="row p-4 justify-content-center">
        <h2 className="text-white">Today is {date.toLocaleDateString()}</h2>
      </div>
    </>
  );
};

export default withRouter(RightPanel);
