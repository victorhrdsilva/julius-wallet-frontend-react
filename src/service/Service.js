import axios from "axios";

const url = "http://localhost:5000/"
let config = {
  headers: {
    Authorization: ``
  }
}

function createHeaders() {
    const auth = localStorage.getItem("juliusWalletToken");
    config = {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    };
    return config;

};

function login(body) {
  const promise = axios.post(`${url}`, body);
  return promise;
};

function register(body) {
  const promise = axios.post(`${url}sing-up`, body);
  promise.then(console.log(promise.data))
  return promise;
};

function postNewHistory(body) {
  const config = createHeaders();
  const promise = axios.post(`${url}history`, body, config);
  return promise;
};

function getHistory (){
  const config = createHeaders();
  const promise = axios.get(`${url}history`, config);
  return promise;
}

export { login, register, getHistory, postNewHistory };