import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import './index.scss';
import {App} from "./app/containers/App";
import {Charts} from "./app/containers/Charts";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ App }/>
    <Route path="/chart" component={ Charts }/>
  </Router>,
  document.getElementById('root')
);
