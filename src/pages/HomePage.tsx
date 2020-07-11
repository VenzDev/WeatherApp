import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeContainer from "../components/HomeContainer";
import { cities } from "../redux/cities";

const HomePage: React.SFC = () => {
  const dispatch = useDispatch();
  const ids: Array<String> = ["2643743", "759734"];
  useEffect(() => {
    ids.forEach((id) => dispatch(cities.getCityMethod(id)));

    const interval = setInterval(() => {
      dispatch(cities.clearData());
      ids.forEach((id) => dispatch(cities.getCityMethod(id)));
    }, 1000 * 10);

    return () => clearInterval(interval);
  }, [dispatch, ids]);

  return <HomeContainer></HomeContainer>;
};

export default HomePage;
