import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:9000/api/v1/",
});
