/**
 * @file store/weather/index.js
 * @author ghy
 *
 * 天气数据store
 */
import { observable, runInAction, action } from 'mobx';
import { message } from 'antd';
import {
  fetchWeatherByIp,
  fetchWeatherByArea,
  fetchHourWeatherByArea
} from '../../api/weather';

export default class Weather {
  @observable.ref
  weatherData = {}; // 天气数据

  @observable.ref
  hourWeatherData = {}; // 小时天气数据

  @observable weatherDataLoading = false; // 天气数据loading

  @observable hourWeatherDataLoading = false; // 小时天气数据loading

  /**
   * 请求查询的天气数据
   */
  @action
  fetchSearchWeather = async ({ area }) => {
    this.weatherDataLoading = true;
    const data = await fetchWeatherByArea({ area });
    if (data) {
      const { showapi_res_body: content } = data || {};
      this.getAreaidFetchHourData(content);
      runInAction('get search weatherData success', () => {
        this.weatherData = content;
        this.weatherDataLoading = false;
      });
    }
    return data;
  };

  /**
   * 处理城市id
   */
  getAreaidFetchHourData = data => {
    const { cityInfo, remark } = data || {};
    const { c1: areaid } = cityInfo || {};
    // 如果有areaid，请求小时数据
    if (areaid) {
      this.fetchHourWeather({ areaid });
    } else {
      message.error(remark || '当前地区信息无法查询');
      // 直接请求当前默认ip地址天气信息
      this.fetchDefaultWeather();
    }
  };

  /**
   * 根据当前ip获取天气情
   */
  @action
  fetchDefaultWeather = async () => {
    this.weatherDataLoading = true;
    const data = await fetchWeatherByIp();
    const { showapi_res_body: content } = data || {};
    const { ret_code: resCode } = content || {};
    // 通过IP查询成功
    if (resCode === 0) {
      this.getAreaidFetchHourData(content);
      runInAction('get IP weatherData success', () => {
        this.weatherData = content;
      });
    }
    this.weatherDataLoading = false;
    return content;
  };

  /**
   * 根据areaid获取12个小时的天气情况
   */
  @action
  fetchHourWeather = async ({ areaid }) => {
    this.hourWeatherDataLoading = true;
    const data = await fetchHourWeatherByArea({ areaid });
    if (data) {
      runInAction('get hour weatherData success', () => {
        const { showapi_res_body: content } = data || {};
        this.hourWeatherData = content;
        this.hourWeatherDataLoading = false;
      });
    }
    return data;
  };
}
