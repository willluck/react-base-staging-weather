/**
 * @file pages/weather/top/index.jsx
 * @author ghy
 *
 * 天气 头部
 */
import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import { observer } from 'mobx-react';
import _ from 'lodash';
import styles from './index.less';

const Search = Input.Search;

@observer
class WeatherTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 输入地理位置搜索  支持模糊搜索 第三方api坑得很 不提供地理位置的api
   */
  onSearch = area => {
    const { store } = this.props;
    // 请求搜索的天气数据
    if (area) {
      store.fetchSearchWeather({ area });
    } else {
      store.fetchDefaultWeather();
    }
  };

  render() {
    const { store } = this.props;
    const { weatherData } = store || {};
    const { cityInfo } = weatherData || {};
    const { c7: province, c5: city, c3: district } = cityInfo || {};
    return (
      <div className={styles.main}>
        <div className={styles.textContent}>
          <Icon type="environment" theme="outlined" style={{ fontSize: 16 }} />
          {district === city ? (
            <span className={styles.text}>{`${province} ${city}`}</span>
          ) : (
            <span className={styles.text}>{`${city} ${district}`}</span>
          )}
        </div>
        <Search
          placeholder="请输入地理位置"
          onSearch={this.onSearch}
          style={{ width: 200 }}
        />
      </div>
    );
  }
}

export default WeatherTop;
