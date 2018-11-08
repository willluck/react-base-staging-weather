/**
 * @file pages/weather/top/index.jsx
 * @author ghy
 *
 * 天气 24小时数据内容
 */
import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import { observer } from 'mobx-react';
import _ from 'lodash';
import styles from './index.less';

@observer
class HourContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStyle: {
        marginLeft: 0
      }
    };
  }

  // 24小时天气 显示第二页
  onNextPage = () => {
    this.setState({
      listStyle: {
        marginLeft: -1200
      }
    });
  };

  // 24小时天气 返回第一页
  onPrevPage = () => {
    this.setState({
      listStyle: {
        marginLeft: 0
      }
    });
  };

  // 截取当前时间
  getTime = time => {
    const hour = time.slice(-4, -2);
    const min = time.slice(-2);
    if (hour === '00') {
      return '明天';
    }
    return `${hour}:${min}`;
  };

  render() {
    const { store } = this.props;
    const { listStyle } = this.state;
    const { hourWeatherData } = store;
    const { hourList } = hourWeatherData || {};
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>逐小时预报</h2>
        <div className={styles.actions}>
          <Button
            type="primary"
            icon="left"
            shape="circle"
            ghost
            size="small"
            className={styles.btnPrev}
            onClick={this.onPrevPage}
          />
          <Button
            type="primary"
            icon="right"
            shape="circle"
            ghost
            size="small"
            onClick={this.onNextPage}
          />
        </div>
        <div className={styles.content} style={listStyle}>
          <ol className={styles.list}>
            {hourList &&
              hourList.map(item => {
                const { weather_code: weatherCode, temperature, time } = item;
                return (
                  <li className={styles.listItem} key={item.time}>
                    <p className={styles.itemTime}>{this.getTime(time)}</p>
                    <img
                      src={`http://app1.showapi.com/weather/icon/day/${weatherCode}.png`}
                      alt=""
                      className={styles.itemContent}
                    />
                    <p className={styles.itemTemperature}>
                      {`${temperature}°`}
                    </p>
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default HourContent;
