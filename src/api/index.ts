import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const token = process.env.REACT_APP_BACKEND_TOKEN;

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  error => Promise.reject(error)
);

export default axios;