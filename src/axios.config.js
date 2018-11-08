import axios from 'axios';
import { message } from 'antd';

/**
 * 一些通用的设置
 */

// 跨域请求带上cookie
// axios.defaults.withCredentials = true;

/**
 * 设置拦截器
 */

// 请求拦截器
// axios.interceptors.request.use(config => {
//   return config;
// });

// 响应拦截器
axios.interceptors.response.use(
  response => {
    const data = response.data;
    const { showapi_res_code: status } = data;
    // showapi_res_code=0 表示请求成功
    if (status !== 0) {
      message.error(data.reason || data.message || '接口请求错误');
    }
    return data;
  },
  err => {
    if (!err.response) {
      message.error(err.message);
      return {};
    }

    const status = err.response.status;

    if (status >= 500) {
      message.error(`服务器内部错误, http code: ${status}`);
    }
    return err.response.data;
  }
);
