import React from "react";
import cityImage from "../../images/city.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cities } from "../../redux/cities";
import { user } from "../../redux/user";
import { AppState } from "../../configureStore";
import { UserState } from "../../redux/user/userState";

interface CityCardProps {
  city: any;
}

const Div = styled.div`
  transition: 0.2s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;

const CityCard: React.SFC<CityCardProps> = ({ city }) => {
  const userData = useSelector(
    (state: AppState): UserState => state.userReducer
  );
  const dispatch = useDispatch();
  const handleSelectCity = () => dispatch(cities.selectCity(city));
  const handleDelete = () => {
    const newFavCities = userData.user.favCities.filter(
      (userCityId: string) => city.id.toString() !== userCityId
    );
    dispatch(user.updateCities(userData.user.id, newFavCities));
  };

  return (
    <Div className="col-xl-2 col-lg-4 col-md-6 mb-3">
      <div style={{ borderRadius: "10px" }} className="card shadow">
        <div className="card-body  p-0">
          <div>
            <Button onClick={handleDelete} className="btn btn-danger">
              x
            </Button>
            <img
              onClick={handleSelectCity}
              style={{ width: "100%", height: "170px" }}
              src={cityImage}
              alt="city"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center">{city.name}</h5>
      </div>
    </Div>
  );
};

export default CityCard;
