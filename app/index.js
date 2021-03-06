import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomeList from './components/HomeList';
import About from './components/About';
import Article from './components/Article';
import './../public/css/common.css';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';
import DataArticals from './data/ARTICALS';

const rootRoute = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeList} />
    <Route path='about' component={About} />
    <Route path='articles' component={HomeList} />
    <Route path='articles/:id' component={Article} />
  </Route>
)

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('app')
 );
