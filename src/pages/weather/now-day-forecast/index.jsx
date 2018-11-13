/**
 * @file pages/weather/overview/index.jsx
 * @author ghy
 *
 * 天气 预览当前基本天气数据
 */
import React, { Component } from 'react';
import { Icon, Tag, Popover } from 'antd';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styles from './index.less';

@observer
class WeatherOverview extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  // 获取api颜色等级
  getAqiColor = aqi => {
    const numAqi = +aqi;
    let color = '#6BCC06';
    if (numAqi > 0 && numAqi <= 50) {
      color = '#6BCC06';
    } else if (numAqi > 50 && numAqi <= 100) {
      color = '#FBCE28';
    } else if (numAqi > 100 && numAqi <= 150) {
      color = '#FE8802';
    } else if (numAqi > 150 && numAqi <= 200) {
      color = '#FF0401';
    } else if (numAqi > 200 && numAqi <= 300) {
      color = '#970754';
    } else if (numAqi > 300 && numAqi <= 500) {
      color = '#61011D';
    }
    return color;
  };

  aqiContent = aqiDetail => {
    const { co, no2, o3, pm2_5: pm25, pm10, so2 } = aqiDetail || {};
    return (
      <div>
        <div className={styles.aqiContent}>
          <div className={styles.aqiContentItemFirstRow}>
            <p className={styles.aqiContentText}>{pm25}</p>
            <p className={styles.aqiContentTitle}>PM2.5</p>
          </div>
          <div className={styles.aqiContentItemFirstRow}>
            <p className={styles.aqiContentText}>{pm10}</p>
            <p className={styles.aqiContentTitle}>PM10</p>
          </div>
          <div className={styles.aqiContentItemFirstRowLast}>
            <p className={styles.aqiContentText}>{so2}</p>
            <p className={styles.aqiContentTitle}>SO2</p>
          </div>
        </div>
        <div className={styles.aqiContent}>
          <div className={styles.aqiContentItemSecondRow}>
            <p className={styles.aqiContentText}>{no2}</p>
            <p className={styles.aqiContentTitle}>NO2</p>
          </div>
          <div className={styles.aqiContentItemSecondRow}>
            <p className={styles.aqiContentText}>{o3}</p>
            <p className={styles.aqiContentTitle}>O3</p>
          </div>
          <div className={styles.aqiContentItemSecondRowLast}>
            <p className={styles.aqiContentText}>{co}</p>
            <p className={styles.aqiContentTitle}>CO</p>
          </div>
        </div>
      </div>
    );
  };

  // aqi弹出框标题
  aqiTitle = (aqiDetail, color) => {
    const { aqi, quality } = aqiDetail || {};
    return (
      <div className={styles.aqiTitle} style={{ color }}>
        空气质量指数
        {aqi}
        {quality}
      </div>
    );
  };

  render() {
    const { store } = this.props;
    const { weatherData } = store || {};
    const { now: nowData } = weatherData || {};
    const {
      temperature,
      aqi,
      sd,
      temperature_time: time,
      weather,
      wind_direction: windDirection,
      wind_power: windPower,
      weather_pic: weatherPic,
      aqiDetail
    } = nowData || {};
    const color = this.getAqiColor(aqi);
    return (
      <div className={styles.main}>
        <div>
          <div className={styles.ctmain}>
            <p className={styles.time}>{`${time} 发布`}</p>
            <span className={styles.temperature}>{`${temperature}°`}</span>
            <span className={styles.name}>{weather}</span>
            <Popover
              content={this.aqiContent(aqiDetail)}
              title={this.aqiTitle(aqiDetail, color)}
              placement="bottom"
              trigger="hover"
            >
              <Tag color={color}>
                <Icon
                  type="environment"
                  theme="outlined"
                  style={{ fontSize: 14 }}
                />
                <span className={styles.aqi}>{aqi}</span>
              </Tag>
            </Popover>
          </div>
          <div className={styles.others}>
            <span className={styles.item}>
              <Icon type="rise" theme="outlined" className={styles.icon} />
              <span className={styles.itemText}>
                {windDirection}
                {windPower}
              </span>
            </span>
            <span className={styles.item}>
              <Icon
                type="environment"
                theme="outlined"
                className={styles.icon}
              />
              <span className={styles.itemText}>{`湿度 ${sd}`}</span>
            </span>
          </div>
          <p className={styles.tips}>你若安好便是晴天</p>
        </div>
        <img src={weatherPic} alt="" className={styles.img} />
      </div>
    );
  }
}

export default WeatherOverview;
