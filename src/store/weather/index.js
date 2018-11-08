/**
 * @file store/weather/index.js
 * @author ghy
 *
 * 天气数据store
 */
import { observable, runInAction, action } from 'mobx';
import {
  fetchWeatherByIp,
  fetchWeatherByArea,
  fetchHourWeatherByArea
} from '../../api/weather';
import { fetchLocation } from '../../api/location';
// import BaseData from '../common/base-data';

export default class Weather {
  @observable.ref
  weatherData = {}; // 天气数据
  @observable.ref
  hourWeatherData = {}; // 小时天气数据

  /**
   * 请求查询的天气数据
   */
  fetchSearchWeather = async ({ area }) => {
    const data = await fetchWeatherByArea({ area });
    if (data) {
      const { showapi_res_body: content } = data || {};
      this.getAreaidFetchHourData(content);
      runInAction('get search weatherData success', () => {
        this.weatherData = content;
      });
    }
    return data;
  };

  /**
   * 处理城市id
   */
  getAreaidFetchHourData = data => {
    const { cityInfo } = data || {};
    const { c1: areaid } = cityInfo || {};
    this.fetchHourWeather({ areaid });
  };

  /**
   * 根据当前ip获取天气情况
   */
  fetchDefaultWeather = async withWeather => {
    const data = await fetchWeatherByIp();
    if (data) {
      const { showapi_res_body: content } = data || {};
      this.getAreaidFetchHourData(content);
      runInAction('get IP weatherData success', () => {
        this.weatherData = content;
      });
    }
    return data;
  };

  /**
   * 根据areaid获取12个小时的天气情况
   */
  fetchHourWeather = async ({ areaid }) => {
    const data = await fetchHourWeatherByArea({ areaid });
    if (data) {
      runInAction('get hour weatherData success', () => {
        const { showapi_res_body: content } = data || {};
        this.hourWeatherData = content;
      });
    }
    return data;
  };
}
