import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN,
  REQUEST_HEADER_AUTH_KEY,
  TOKEN_TYPE,
} from "utils/Admin/constant";
import { onSignOutSuccess } from "./Admin/authService";

class APIService {
  baseApi!: AxiosInstance;

  init() {
    this.baseApi = axios.create({
      baseURL: "https://bander.be-here.app",
    });

    const unauthorizedCode = [400];
    this.baseApi.interceptors.request.use(
      async (config) => {
        const accessToken = await localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
          config.headers[
            REQUEST_HEADER_AUTH_KEY
          ] = `${TOKEN_TYPE}${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.baseApi.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        if (response && unauthorizedCode.includes(response.status)) {
          onSignOutSuccess();
          return;
        }

        return Promise.reject(error);
      }
    );
  }

  fetchData(param: AxiosRequestConfig = {}) {
    return new Promise((resolve, reject) => {
      this.baseApi
        .request(param)
        .then((response) => {
          resolve(response.data);
        })
        .catch((errors) => {
          reject(errors);
        });
    });
  }
}
// eslint-disable-next-line
export default new APIService();
