import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import styles from "./index.less";

const { Header, Content } = Layout;

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
      <Layout style={{ minWidth: 1200 }}>
        <Header>
          {/* <div className={styles.logo} /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['weather']}
            selectedKeys={[currentPath || 'weather']}
            style={{ lineHeight: '64px' }}
            onClick={this.onMenuClick}
          >
            <Menu.Item key="weather">天气</Menu.Item>
            <Menu.Item key="mine">我的</Menu.Item>
            <Menu.Item key="diary">日志</Menu.Item>
            <Menu.Item key="photograph">照片</Menu.Item>
          </Menu>
        </Header>
        <Content>{children}</Content>
      </Layout>
    );
  }
}

export default withRouter(RecordLayout);
