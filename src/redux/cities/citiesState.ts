export interface City {
  id: number | null;
  name: string;
  weather: [{ icon: string; description: string }];
  wind: {
    speed: number | null;
  };
  main: {
    humidity: number | null;
  };
}

export interface CitiesState {
  isLoading: boolean;
  cities: Array<City>;
  errorMessage: string;
}

export interface SelectedCityState {
  city: City;
}
