import axios from "axios";

const apiURLs = {
  development: "https://dev.codeleap.co.uk/careers",
  production: "https://dev.codeleap.co.uk/careers",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

export { api };
