import React, { useState } from "react";
import Modal from "../Modal";
import { getCitiesByName } from "../../api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../redux/user";
import { cities } from "../../redux/cities";
export interface AddCityModalProps {
  toggleModal: Function;
}

const AddCityModal: React.SFC<AddCityModalProps> = ({ toggleModal }) => {
  const [fetchedData, setFetchedData] = useState<any>({});
  const [selectedCity, setSelectedCity] = useState<any>({});

  const userData = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  const handleInput = async (e: any) => {
    let value = e.target.value;
    if (value.length > 0) value = value[0].toUpperCase() + value.slice(1);

    if (value.length >= 4) {
      const data = await getCitiesByName(value);
      if (data !== null) setFetchedData(data);
    } else setFetchedData({});
  };

  const handleSelectCity = (city: Object) => setSelectedCity(city);

  const handleConfirm = () => {
    dispatch(
      user.updateCities(userData.user.id, [
        ...userData.user.favCities,
        selectedCity.id.toString(),
      ])
    );
    dispatch(cities.getCityMethod(selectedCity.id.toString()));
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <h5 className="py-3">Find your city</h5>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">City Name</span>
        </div>
        <input
          onChange={handleInput}
          type="text"
          className="form-control"
          placeholder="Rzeszów"
        />
      </div>
      <div className="row">
        {Object.keys(fetchedData).length > 0
          ? Object.keys(fetchedData).map((key) => (
              <div key={fetchedData[key].id} className="col-xl-2">
                <button
                  onClick={() => handleSelectCity(fetchedData[key])}
                  className="btn btn-primary"
                >
                  {fetchedData[key].name}
                </button>
              </div>
            ))
          : null}
      </div>
      {Object.keys(selectedCity).length > 0 ? (
        <div className="my-3">
          <h5>City: {selectedCity.name}</h5>
          <h5>Country: {selectedCity.country}</h5>
          <h5>Latitude: {selectedCity.coord.lat.toFixed(2)}</h5>
          <h5>Longitude: {selectedCity.coord.lon.toFixed(2)}</h5>
          <button onClick={handleConfirm} className="btn btn-primary">
            Confirm
          </button>
        </div>
      ) : null}
    </Modal>
  );
};

export default AddCityModal;
