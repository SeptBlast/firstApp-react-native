import axios from "axios";

const BASE_URL = "https://sm-backend-server.herokuapp.com";
const REGISTER_URL_EXTENSION = "/api/user/register";
const LOGIN_URL_EXTENSION = "/api/user/register";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
