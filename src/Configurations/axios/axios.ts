import axios from "axios";
import { apiUrl } from "../api";

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
  },
});


export const auth_http = (token : string) => axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + token
  },
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

