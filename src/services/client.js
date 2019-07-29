import axios from 'axios';

var token     = '27fc0b07-5e85-41de-a749-338e1a00e4e8';
var $apiUrl   = 'https://api.cts-strasbourg.eu/v1/siri/2.0/';

const api = axios.create({
  baseURL: $apiUrl,
});
const client = (route, params) => {
  return api.get(route, {
    params: params.params,
    auth: {
      username: token
    }
  }).then((res) => {
    return res.data;
  })
};
/*
const client = (route, params) => (
  api.get(route, {
    params: params.params,
    auth: {
      username: token
    }
  }).then((res) => {
    let data = res.data;
    params.dispatch({type: params.type, data: data})
  })
);
*/

export default client;