import HydraProvider from "./hydraProvider";
import axios from "axios";
import {HttpError} from "@pankod/refine-core";

export const apiClient = axios.create({
  baseURL: '/api'
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  },
);

let flag = false
apiClient.interceptors.request.use((request) => {
  if (flag) { // if there's a pending request, don't send another one
    return Promise.reject('Duplicate request.');
  } else {
    flag = true;
  }
  return request;

}, (error) => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use((response) => {
  // got a response, we're able to handle another request
  flag = false;
  return Promise.resolve(response)
}, (error) => {
  return Promise.reject(error);
});

export const dataProvider = HydraProvider(apiClient)

export {backend} from './backend'

