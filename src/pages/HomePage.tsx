import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "../components/HomeContainer";
import { cities } from "../redux/cities";
import showToast from "../utils/showToast";

const HomePage: React.SFC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer);
  const { favCities } = userData.user;
  useEffect(() => {
    //FIXED bug with login again!
    dispatch(cities.clearData());
    showToast("Login Success");
    favCities.forEach((id: String) => dispatch(cities.getCityMethod(id)));
    const interval = setInterval(() => {
      dispatch(cities.clearData());
      favCities.forEach((id: String) => dispatch(cities.getCityMethod(id)));
    }, 1000 * 10);

    return () => clearInterval(interval);
  }, [dispatch, favCities]);

  return <HomeContainer></HomeContainer>;
};

export default HomePage;
