import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Employee from './Employee';
import Visitor from './Visitor';
import Appointments from './Appointments';
import Sign from './Sign';
import Message from './Message';
import * as serviceWorker from './serviceWorker';
import About from "./About";
import Help from "./Help";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/About" component={About}/>
      <Route exact path="/Employee" component={Employee} />
      <Route exact path="/Employee/Appointments" component={Appointments} />
      <Route path="/Employee/Appointments/Sign" component={Sign} />
      <Route exact path="/Visitor" component={Visitor} />
      <Route path="/Visitor/Message" component={Message} />
      <Route path="/Help" component={Help}/>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
