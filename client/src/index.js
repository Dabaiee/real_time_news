import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { Router, Link, browserHistory } from 'react-router';


// import { Link } from 'react-router-dom';

// ReactDOM.render(
// 	<App />, 
// 	document.getElementById('root')
// );

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root'));

registerServiceWorker();
