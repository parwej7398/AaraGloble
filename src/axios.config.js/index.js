import axios from "axios";

const baseURL = "https://m1blog.aaragroups.com";
export const axiosInstence = axios.create({ baseURL: baseURL });
