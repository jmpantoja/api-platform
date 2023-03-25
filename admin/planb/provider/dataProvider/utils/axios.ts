import { HttpError } from "@refinedev/core";
import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
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

export { apiClient };
