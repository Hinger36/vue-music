import Vue from 'vue';
import axios from 'axios';
// import res from './resource';

// 响应时间
// axios.defaults.timeout = 5 * 1000;
// 配置cookie
axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 配置接口地址
axios.defaults.baseURL = 'http://bluebooo.com:4000';


export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
