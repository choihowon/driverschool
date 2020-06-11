import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from '@version/react-router-v3';
import './index.css';
import App from './App';
import Quiz from './component/quiz';
import Road from './component/road';
import home from './component/home';
import Board from './component/board';
import NotFound from './component/notfound';
import BoardWriteForm from './component/BoardWriteForm';


ReactDOM.render(
  
  <Router history={browserHistory}>
    <Route path="/"  component={App}>
    <IndexRoute component={home}/>
    </Route>
  <Route path="/dda"  component={App}>
    <IndexRoute component={home}/>
    <Route path="/dda/quiz" component={Quiz}/>
    <Route path="/dda/road" component={Road}/>
    <Route path="/dda/board" component={Board}/>
    <Route path="/dda/BoardWriteForm" component={BoardWriteForm}/>

  </Route>
    <Route component={NotFound} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

