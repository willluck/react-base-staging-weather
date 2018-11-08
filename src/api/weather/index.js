/**
 * @file api/weather/index.js
 * @author ghy
 *
 * api 获取天气数据
 */
import axios from 'axios';

const YIYUANAPPID = process.env.REACT_APP_API_YIYUAN_APP_ID;
const YIYUANAPPKEY = process.env.REACT_APP_API_YIYUAN_APP_KEY;
const commonParams = {
  showapi_sign: YIYUANAPPKEY,
  showapi_appid: YIYUANAPPID
};

/**
 * 通过城市名称或城市id获取天气数据
 */
export async function fetchWeatherByArea({ area, areaId }) {
  const url = `/9-2`;
  const data = await axios({
    url,
    params: {
      ...commonParams,
      needMoreDay: 1,
      needIndex: 1,
      area,
      areaId
    }
  });
  return data;
}

/**
 * 通过城市名称或城市id获取24小时天气预报
 */
export async function fetchHourWeatherByArea({ area, areaid }) {
  const url = `/9-8`;
  const data = await axios({
    url,
    params: {
      ...commonParams,
      area,
      areaid
    }
  });
  return data;
}

/**
 * 通过ip地址获取天气
 */
export async function fetchWeatherByIp() {
  const url = `/9-4`;
  const data = await axios({
    url,
    params: {
      ...commonParams,
      needMoreDay: 1,
      needIndex: 1
    }
  });
  return data;
}
