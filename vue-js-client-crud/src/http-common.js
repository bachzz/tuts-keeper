import axios from "axios";

export default axios.create({
  baseURL: "https://tuts-keeper-nodejs.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
