import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8040";

const baseAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `Method: ${config.method.toUpperCase()}\n` +
        `URL: ${BASE_URL}${config.url}\n` +
        `Params: ${JSON.stringify(config.params)}\n` +
        `Time: ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const poolsApi = {
  getPools: (filters) =>
    baseAxios.get("/pools", {
      params: {
        filters: filters,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    }),  
  getPoolTypes: () => baseAxios.get("/pools/types"),

  createPool: (pool) =>
    baseAxios.post("/pools", {
      name: pool.name,
      valueOfWater: pool.valueOfWater,
      maxAmount: pool.maxAmount,
      type: pool.type,
    }),

  editPool: (pool) =>
    baseAxios.put("/pools", {
      id: pool.id,
      name: pool.name,
      valueOfWater: pool.valueOfWater,
      maxAmount: pool.maxAmount,
      type: pool.type,
    }),

  deletePool: (id) => baseAxios.delete(`/pools/${id}`),
};

export default poolsApi;
