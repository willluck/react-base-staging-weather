/**
 * @file pages/weather/index-content/index.jsx
 * @author ghy
 *
 * 指数数据
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

@observer
class IndexContent extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      listStyle: {
        marginLeft: 0
      }
    };
  }

  onPrevPage = () => {
    this.setState({ listStyle: { marginLeft: 0 } });
  };

  onNextPage = () => {
    this.setState({ listStyle: { marginLeft: -440 } });
  };

  render() {
    const { listStyle } = this.state;
    const { store } = this.props;
    const { weatherData } = store || {};
    const { f1 } = weatherData || {};
    const { index } = f1 || {};
    const {
      clothes,
      comfort,
      cold,
      wash_car: washCar,
      sports,
      uv,
      gj,
      travel,
      ls,
      nl,
      aqi,
      ag
    } = index || {};
    // 指数数据  第三方接口提供了很多指数数据，只展示12个
    let dataFirst = [];
    let dataSecond = [];
    if (index) {
      dataFirst = [
        {
          icon: 'plus-circle',
          title: '穿衣',
          summary: clothes.title,
          content: clothes.desc
        },
        {
          icon: 'smile',
          title: '舒适',
          summary: comfort.title,
          content: comfort.desc
        },
        {
          icon: 'skin',
          title: '感冒',
          summary: cold.title,
          content: cold.desc
        },
        {
          icon: 'tool',
          title: '洗车',
          summary: washCar.title,
          content: washCar.desc
        },
        {
          icon: 'pie-chart',
          title: '运动',
          summary: sports.title,
          content: sports.desc
        },
        {
          icon: 'cloud',
          title: '防晒',
          summary: uv.title,
          content: uv.desc
        }
      ];
      dataSecond = [
        {
          icon: 'tag',
          title: '逛街',
          summary: gj.title,
          content: gj.desc
        },
        {
          icon: 'home',
          title: '旅游',
          summary: travel.title,
          content: travel.desc
        },
        {
          icon: 'heart',
          title: '晾晒',
          summary: ls.title,
          content: ls.desc
        },
        {
          icon: 'like',
          title: '夜生活 ',
          summary: nl.title,
          content: nl.desc
        },
        {
          icon: 'experiment',
          title: '大气污染',
          summary: aqi.title,
          content: aqi.desc
        },
        {
          icon: 'frown',
          title: '过敏',
          summary: ag.title,
          content: ag.desc
        }
      ];
    }
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>生活指数</h2>
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
        <div className={styles.mainContent}>
          <div className={styles.content} style={listStyle}>
            <ul className={styles.living1}>
              {dataFirst.length > 0 &&
                dataFirst.map(item => (
                  <li className={styles.liItem} key={item.title}>
                    <div className={styles.subContent}>
                      <Icon
                        type={item.icon}
                        theme="twoTone"
                        style={{ fontSize: 32, marginBottom: 12 }}
                      />
                      <p className={styles.indexSummary}>
                        {item.title}
                        {item.summary}
                      </p>
                    </div>
                    <div className={styles.detailContent}>
                      <div className={styles.detail}>{item.content}</div>
                    </div>
                  </li>
                ))}
            </ul>
            <ul className={styles.living1}>
              {dataSecond.length > 0 &&
                dataSecond.map(item => (
                  <li className={styles.liItem} key={item.title}>
                    <div className={styles.subContent}>
                      <Icon
                        type={item.icon}
                        theme="twoTone"
                        style={{ fontSize: 32, marginBottom: 12 }}
                      />
                      <p className={styles.indexSummary}>
                        {item.title}
                        {item.summary}
                      </p>
                    </div>
                    <div className={styles.detailContent}>
                      <div className={styles.detail}>{item.content}</div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexContent;
