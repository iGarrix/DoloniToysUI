import axios from "axios";
import { apiUrl } from "../api";

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
  },
});
export const axiosPrivate = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export interface IAuthConfig {
  headers: {Authorization : any};
}

export const AuthorizateHeader = (token : any) => {
  return {
    headers: {
      Authorization: "Bearer " + token
    }
  }
}

