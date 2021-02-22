import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: "http://localhost:5001/clone-d1302/us-central1/api",
  baseURL: "https://us-central1-clone-d1302.cloudfunctions.net/api",
});
export default instance;
