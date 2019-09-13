import axios from 'axios';

export default axios.create({
    baseURL: window.location.origin + "/api/v1/",
    responseType: "json"
  });