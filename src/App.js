import React from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div>
      <h1>Home</h1>
      Please select your Role:
      <ul>
        <li>
          <Link to="/Employee">Employee</Link>
        </li>
        <li>
          <Link to="/Visitor">Visitor</Link>
        </li>
      </ul>
    </div>
  );
  }
}

export default App;
