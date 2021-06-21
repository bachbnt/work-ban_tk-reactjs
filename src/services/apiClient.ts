import axios, { AxiosInstance } from 'axios';
import { Endpoint } from 'src/configs/endpoint';
import { Key } from 'src/constants/key';
import { cookie } from 'src/utils/cookie';

const initApiClient = (baseURL: string): AxiosInstance => {
  const defaultConfig = {
    baseURL,
    timeout: 6 * 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const axiosInstance = axios.create(defaultConfig);

  axiosInstance.interceptors.request.use(async (config) => {
    const token = cookie.getItem(Key.ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
  return axiosInstance;
};

export const apiClient = initApiClient(Endpoint.BASE_URL);
