import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "../components/HomeContainer";
import { cities } from "../redux/cities";

const HomePage: React.SFC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer);
  const { favCities } = userData.user;

  useEffect(() => {
    dispatch(cities.clearData());

    favCities.forEach((id: string) => dispatch(cities.getCityMethod(id)));

    const interval = setInterval(() => {
      dispatch(cities.clearData());
      favCities.forEach((id: string) => dispatch(cities.getCityMethod(id)));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [dispatch, favCities]);

  return <HomeContainer></HomeContainer>;
};

export default HomePage;
