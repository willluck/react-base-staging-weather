/**
 * @file pages/weather/future-day-forecast/index.jsx
 * @author ghy
 *
 * 七天天气数据
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Chart from './chart';
import styles from './index.less';

@observer
class DayForecast extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  // 获取当前周几
  getWeek = num => {
    switch (num) {
      case 1:
        return '周一';
      case 2:
        return '周二';
      case 3:
        return '周三';
      case 4:
        return '周四';
      case 5:
        return '周五';
      case 6:
        return '周六';
      case 7:
        return '周日';
      default:
        return null;
    }
  };

  // 截取当前日期
  getDay = date => {
    const month = date.slice(-4, -2);
    const day = date.slice(-2);
    return `${month}月${day}日`;
  };

  render() {
    const { store } = this.props;
    const { weatherData } = store || {};
    const { f1, f2, f3, f4, f5, f6, f7 } = weatherData || {};
    let weathers = [];
    if (!_.isEmpty(weatherData)) {
      weathers = [f1, f2, f3, f4, f5, f6, f7];
    }
    return (
      <div className={styles.main}>
        <a
          className={styles.link}
          href="http://www.weather.com.cn/weather15d/101270101.shtml"
        >
          15日天气预报
        </a>
        <h2 className={styles.title}>7日天气预报</h2>
        <div className={styles.content}>
          <ol className={styles.list}>
            {weathers.length > 0 &&
              weathers.map((item, index) => {
                const {
                  day,
                  day_weather: dayWeather,
                  night_weather: nightWeather,
                  // day_air_temperature: dayTemperature,
                  // night_air_temperature: nightTemperature,
                  day_weather_pic: dayPic,
                  night_weather_pic: nightPic,
                  day_wind_direction: windDirection,
                  day_wind_power: windPower,
                  weekday
                } = item || {};
                let week = '';
                if (index === 0) {
                  week = '今天';
                } else if (index === 1) {
                  week = '明天';
                } else if (index === 2) {
                  week = '后天';
                } else {
                  week = this.getWeek(weekday);
                }
                return (
                  <li className={styles.listItem} key={day}>
                    <p className={styles.day}>{week}</p>
                    <p className={styles.date}>{this.getDay(day)}</p>
                    <div>
                      <p className={styles.weather}>{dayWeather}</p>
                      <img src={dayPic} alt="" className={styles.img} />
                    </div>
                    <div className={styles.night}>
                      <img src={nightPic} alt="" className={styles.img} />
                      <p className={styles.weather}>{nightWeather}</p>
                    </div>
                    <p className={styles.wind}>
                      {windDirection}
                      {windPower}
                    </p>
                  </li>
                );
              })}
          </ol>
          <div className={styles.chart}>
            <Chart weathers={weathers} />
          </div>
        </div>
      </div>
    );
  }
}

export default DayForecast;
