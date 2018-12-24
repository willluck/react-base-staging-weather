/**
 * @file pages/weather/future-day-forecast/index.jsx
 * @author ghy
 *
 * 七天天气数据
 */
import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

class DayForecastChart extends Component {
  static propTypes = {
    weathers: PropTypes.array.isRequired
  };

  getOption = () => {
    const option = {
      tooltip: {
        show: false,
        trigger: 'axis'
      },
      xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        show: false,
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          name: '最高气温',
          type: 'line',
          data: [],
          label: {
            show: true,
            formatter: '{c} °C'
          }
        },
        {
          name: '最低气温',
          type: 'line',
          data: [],
          label: {
            show: true,
            formatter: '{c} °C'
          }
        }
      ]
    };
    return option;
  };

  render() {
    const { weathers } = this.props;
    const option = this.getOption();
    if (weathers && weathers.length > 0) {
      option.series[0].data = _.map(weathers, 'day_air_temperature');
      option.series[1].data = _.map(weathers, 'night_air_temperature');
    }
    return (
      <ReactEcharts
        option={option}
        style={{ height: '280px', width: '775px' }}
        className="react_for_echarts"
      />
    );
  }
}

export default DayForecastChart;
