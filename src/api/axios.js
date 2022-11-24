import queryString from "query-string";
const { default: axios } = require("axios");
const instance = axios.create({
  baseURL: "https://backend-et52mqssfq-as.a.run.app/api/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    Accept: "application/json",
    "X-API-KEY": "1xqiK5VEsE4T7PkLCPdJVhyIkfGS4JTkzuU6Vc7j",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params, {
      encode: false,
    });
  },
});
instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default instance;
