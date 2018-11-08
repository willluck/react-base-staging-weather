import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
// import { Provider } from "mobx-react";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import createBrowserHistory from 'history/createBrowserHistory';

import './axios.config';
import './index.less';
import App from './app';

const browserHistory = createBrowserHistory();
// import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App history={browserHistory} />
  </LocaleProvider>,
  document.getElementById('root')
);

// registerServiceWorker();
