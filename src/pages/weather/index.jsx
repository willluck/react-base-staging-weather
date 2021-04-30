/**
 * @file pages/weather/index.jsx
 * @author ghy
 *
 * 天气主页面
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { message, Spin } from 'antd';
import Top from './top';
import Overview from './now-day-forecast';
import HourContent from './future-hour-forecast';
import DayForecast from './future-day-forecast';
import IndexContent from './index-content';
import WeatherStore from '../../store/weather';
import styles from './index.less';

@observer
class Weather extends Component {
  store = new WeatherStore();

  componentDidMount() {
    this.fetchDefaultWeather();
  }

  async fetchDefaultWeather() {
    const store = this.store;
    // 通过当前ip地址直接获取天气数据
    const resData = await store.fetchDefaultWeather();
    const { ret_code: resCode } = resData || {};
    // ip查询天气失败
    if (resCode !== 0) {
      message.warning('根据当前ip查询天气错误，默认查询北京');
      store.fetchSearchWeather({ area: '北京' });
    }
  }

  render() {
    const store = this.store;
    const { weatherDataLoading, hourWeatherDataLoading } = store;
    const isLoading = weatherDataLoading || hourWeatherDataLoading;
    return (
      <div className={styles.main}>
        <Spin size="large" spinning={isLoading}>
          <div className={styles.header}>
            <section className={styles.top}>
              <Top store={store} />
            </section>
            <section className={styles.overview}>
              <Overview store={store} />
            </section>
          </div>
          <HourContent store={store} />
          <div className={styles.detail}>
            <DayForecast store={store} />
            <IndexContent store={store} />
          </div>
        </Spin>
      </div>
    );
  }
}

export default Weather;
