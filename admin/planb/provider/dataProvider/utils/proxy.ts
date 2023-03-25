import {HttpError} from "@refinedev/core";
import axios from "axios";
import getConfig from 'next/config'
import nookies from "nookies";

export const proxy = axios.create({
  baseURL: '/admin/api',
});

proxy.interceptors.response.use(
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

