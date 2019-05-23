import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
  }

  render() {

    const {isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {


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
            <ul>
              {items.map(item => (
                  <li key={item.id}>Name: {item.name} Email: {item.email}</li>
              ))}
            </ul>

          </div>
      );
    }
  }
}

export default App;
