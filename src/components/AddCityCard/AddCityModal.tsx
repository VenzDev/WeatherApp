import React, { useState, FormEvent } from "react";
import Modal from "../Modal";
import { getCitiesByName } from "../../api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../redux/user";
import { cities } from "../../redux/cities";
import { AppState } from "../../configureStore";
import { UserState } from "../../redux/user/userState";

interface AddCityModalProps {
  toggleModal: Function;
}

const AddCityModal: React.SFC<AddCityModalProps> = ({ toggleModal }) => {
  const [fetchedData, setFetchedData] = useState<any>({});
  const [selectedCity, setSelectedCity] = useState<any>({});

  const userData: UserState = useSelector(
    (state: AppState) => state.userReducer
  );
  const dispatch = useDispatch();
  const handleInput = async (e: FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (value.length > 0) {
      value = value[0].toUpperCase() + value.slice(1);
      value = escapeDiacritics(value);
    }

    if (value.length >= 3) {
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

  const isData = Object.keys(fetchedData).length > 0;
  const isSelected = Object.keys(selectedCity).length > 0;

  return (
    <Modal height={"70%"} width={"60%"} toggleModal={toggleModal}>
      <h5 className="py-3">Find your city</h5>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">City Name</span>
        </div>
        <input
          onChange={handleInput}
          type="text"
          className="form-control"
          placeholder="Warsaw"
        />
      </div>
      <div className="row">
        {isData
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
      {isSelected ? (
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

function escapeDiacritics(value: string) {
  return value
    .replace(/ą/g, "a")
    .replace(/Ą/g, "A")
    .replace(/ć/g, "c")
    .replace(/Ć/g, "C")
    .replace(/ę/g, "e")
    .replace(/Ę/g, "E")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .replace(/ń/g, "n")
    .replace(/Ń/g, "N")
    .replace(/ó/g, "o")
    .replace(/Ó/g, "O")
    .replace(/ś/g, "s")
    .replace(/Ś/g, "S")
    .replace(/ż/g, "z")
    .replace(/Ż/g, "Z")
    .replace(/ź/g, "z")
    .replace(/Ź/g, "Z");
}

export default AddCityModal;
