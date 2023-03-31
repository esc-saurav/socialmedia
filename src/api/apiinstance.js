import axios from "axios";
import { useSelector } from "react-redux";

// const Token = useSelector((state) => state.token);
// console.log(Token);

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "http://192.168.1.69:5000/",
  timeout: 1000,
  // headers: { Authorization: `Bearer ${Token}` },
});

export default instance;
