/**
 * @file api/location/index.js
 * @author ghy
 *
 * api 地理位置
 */
import axios from 'axios';

const BAIDULOCATIONAPPKEY = process.env.REACT_APP_API_BAIDU_MAP_APP_KEY;
const BAIDULOCATION = process.env.REACT_APP_API_BAIDU_LOCATION;

const JUHEWEATHERAPPKEY = process.env.REACT_APP_API_JUHE_WEATHER_APP_KEY;
// 百度地图的坐标类型为bd09ll
const coor = 'bd09ll';
// 转换类型，1：GPS->百度， 2: 百度->GPS ，3:GPS->谷歌， 4:谷歌->GPS  5:百度->谷歌 ，6:谷歌->百度
const transformType = 2;

/**
 * 获取当前ip地理位置
 */
export async function fetchLocation() {
  const url = `${BAIDULOCATION}/ip`;
  const data = await axios({
    url,
    params: {
      ak: BAIDULOCATIONAPPKEY,
      coor
    }
  });
  return data;
}

/**
 * 百度坐标  转换  GPS
 */
export async function fetchTransformLocation({ lon, lat }) {
  const url = `/offset/index`;
  const data = await axios({
    url,
    params: {
      key: JUHEWEATHERAPPKEY,
      type: transformType,
      lng: lon,
      lat
    }
  });
  return data;
}
