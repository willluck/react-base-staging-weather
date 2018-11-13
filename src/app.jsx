/**
 * 最顶层组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import Routers from './routers';

const App = ({ history }) => (
  <div>
    <Routers history={history} />
  </div>
);

App.propTypes = {
  history: PropTypes.object
};

App.defaultProps = {
  history: {}
};

export default App;
