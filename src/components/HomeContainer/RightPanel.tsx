import React from "react";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../../images/avatar.png";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { user } from "../../redux/user";
import styled from "styled-components";
import CityDesc from "../CityDesc";

export interface RightPanelProps extends RouteComponentProps<any> {}

const RightPanel: React.SFC<RightPanelProps> = ({ history }) => {
  const userData = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const date = new Date();
  const handleLogout = () => {
    dispatch(user.logout());
    history.push("/");
  };

  const RightPanelContainer = styled.div`
    background-color: #110752;
  `;

  return (
    <RightPanelContainer className="col-xl-4 order-1 order-xl-2">
      <div
        style={{ color: "white" }}
        className="row  align-items-center justify-content-around p-4 my-4"
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
      <div className="row p-4 justify-content-center">
        <CityDesc />
      </div>
    </RightPanelContainer>
  );
};

export default withRouter(RightPanel);
