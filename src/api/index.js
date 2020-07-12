import axios from "axios";

const baseURL = process.env.API_BASE_URL;
const authToken = String(process.env.AUTH_TOKEN);
const token = String(process.env.TOKEN);

const instance = axios.create({ baseURL });

export const setAuthHeader = () => {
  instance.defaults.headers.common[authToken] = `Basic ${token}`;
};

export const deleteAuthHeader = () => {
  delete instance.defaults.headers.common[authToken];
};

export const getProducts = () => instance.get("/search");

export const editProduct = (data, id) => instance.post(`/products/${id}`, data);

export default instance;
