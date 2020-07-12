interface Data {
  list: Array<info>;
}
interface info {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  dt_txt: string;
}

const prepareTempData = (data: Data) => {
  const preparedData: Array<Object> = [];

  function toCelcius(kelvin: number) {
    return (kelvin - 273.15).toFixed(2);
  }
  data.list.forEach((info) => {
    let obj = {
      name: info.dt_txt,
      temp: toCelcius(info.main.temp),
      feels_like: toCelcius(info.main.feels_like),
    };
    preparedData.push(obj);
  });
  return preparedData;
};

const prepareHumidityData = (data: Data) => {
  const preparedData: Array<Object> = [];

  data.list.forEach((info) => {
    let obj = {
      name: info.dt_txt,
      humidity: info.main.humidity,
    };
    preparedData.push(obj);
  });
  return preparedData;
};
export { prepareTempData, prepareHumidityData };
