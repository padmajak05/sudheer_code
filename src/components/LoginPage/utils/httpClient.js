
import axios from 'axios';
import _ from 'lodash';
// import { API_BASE_URL as endpoint } from '../config'
const endpoint='http://localhost:3000'
function http(method, obj) {
  const config = {
    method,
    url: obj.path,
    baseURL: endpoint,
    headers: getHeaders(obj.headers)

  };
  if (obj.progress) {
    /* config.onUploadProgress = progressEvent => {
      let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
      obj.progress(percentCompleted);
    } */
  }
  if (obj.data) {
    config.data = obj.data;
  }
  if (obj.params) {
    config.params = obj.params;
  }
  return axios(config);
};

function getHeaders(options = {}) {
  const h = {
    'Content-Type': 'application/json',
    'Client-Type': 'APP',
    'App-Id': 'CNF'
  };
  return h;
}; 

 

const HttpClient = {
  get(obj = {}) {
    return http('GET', obj);
  },
  post(obj) {
    return http('POST', obj);
  },
  delete(obj) {
    return http('DELETE', obj);
  },
  download(obj) {
    // obj.downloadReq = true;
    return http('GET', obj);
  },
};

export default HttpClient;
