/**
 * @file pages/weather/index.jsx
 * @author ghy
 *
 * 天气主页面
 */
import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { Spin } from 'antd';
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
    const store = this.store;
    // 通过当前ip地址直接获取天气数据
    store.fetchDefaultWeather();
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
