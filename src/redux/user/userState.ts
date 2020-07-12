export interface UserState {
  isLoading: boolean;
  user: User;
  errorMessage: "";
}
export interface User {
  email: string;
  favCities: Array<string>;
  name: string;
  password: string;
  surname: string;
  id: string;
}
