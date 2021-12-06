import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

const referenceSrc = require('../../resource/beianIcon.png');

const referenceLink =
  'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011302000068';

const MIITLink = 'https://beian.miit.gov.cn/';

class RecordLayout extends Component {
  static propTypes = {
    children: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object
  };

  static defaultProps = {
    children: {},
    history: {},
    location: {}
  };

  /**
   * 路由跳转方法
   */
  onMenuClick = e => {
    const { history } = this.props;
    if (e.key === 'weather') {
      history.push('/');
    } else {
      history.push(`/${e.key}`);
    }
  };

  render() {
    const { children, location } = this.props;
    const currentPath = location.pathname.substring(1);
    return (
      <Layout className={styles.layout}>
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['weather']}
            selectedKeys={[currentPath || 'weather']}
            style={{ lineHeight: '64px' }}
            onClick={this.onMenuClick}
          >
            <Menu.Item key="weather">天气预报DEMO</Menu.Item>
            <Menu.Item key="mine">我的DEMO</Menu.Item>
            <Menu.Item key="diary">日志DEMO</Menu.Item>
            <Menu.Item key="photograph">照片DEMO</Menu.Item>
          </Menu>
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>
          <p> Copyright willGHY All Rights Reserved</p>
          <div className={styles.icpContent}>
            <a href={MIITLink}>蜀ICP备19016145号</a>
            <span className={styles.email}>邮箱：willghy@qq.com</span>
          </div>
          <div className={styles.beianContent}>
            <a href={referenceLink} className={styles.beianDetail}>
              <img src={referenceSrc} alt="" />
              <span>川公网安备 51011302000068号</span>
            </a>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(RecordLayout);
