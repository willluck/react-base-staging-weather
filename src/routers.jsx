import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './components/layout';
// import Diary from './pages/diary';
// import Mine from './pages/mine';
// import Photograph from './pages/photograph';
// import Weather from './pages/weather';
// import Bundle from './Bundle';

// const MineItem = props => (
//   <Bundle load={() => import('./pages/mine')}>
//     {Mine => <Mine {...props} />}
//   </Bundle>
// );

// const DiaryItem = props => (
//   <Bundle load={() => import('./pages/diary')}>
//     {Diary => <Diary {...props} />}
//   </Bundle>
// );

// const PhotographItem = props => (
//   <Bundle load={() => import('./pages/photograph')}>
//     {Photograph => <Photograph {...props} />}
//   </Bundle>
// );

// const WeatherItem = props => (
//   <Bundle load={() => import('./pages/weather')}>
//     {Weather => <Weather {...props} />}
//   </Bundle>
// );

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

const MineItem = Loadable({
  loader: () => import('./pages/mine'),
  loading: MyLoadingComponent
});

const DiaryItem = Loadable({
  loader: () => import('./pages/diary'),
  loading: MyLoadingComponent
});

const PhotographItem = Loadable({
  loader: () => import('./pages/photograph'),
  loading: MyLoadingComponent
});

const WeatherItem = Loadable({
  loader: () => import('./pages/weather'),
  loading: MyLoadingComponent
});

const Routes = ({ history }) => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/mine" component={MineItem} />
        <Route exact path="/diary" component={DiaryItem} />
        <Route exact path="/photograph" component={PhotographItem} />
        <Route exact path="/" component={WeatherItem} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
