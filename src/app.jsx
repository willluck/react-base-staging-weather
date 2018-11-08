/**
 * 最顶层组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routers from './routers';

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static defaultProps = {
    history: {}
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <Routers history={history} />
      </div>
    );
  }
}
