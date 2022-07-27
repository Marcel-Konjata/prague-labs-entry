import axios from "axios";
//I am lazy but procces.env.REST_API_URL instead hard string
export const restApiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

//overkill but prep for middleware use for every request if needed ie auth etc
restApiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
