import React from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div>
      <h1>Please select your Role:</h1>
      <ul>
        <li>
          <h2><Link to="/Employee">Employee</Link></h2>
        </li>
        <li>
          <h2><Link to="/Visitor">Visitor</Link></h2>
        </li>
      </ul>
    </div>
  );
  }
}

export default App;
