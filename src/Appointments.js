import React from 'react'
import { Link } from 'react-router-dom'


class Appointments extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Vistior</th>
          <th>Sign in/out</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td><Link to="/Employee/Appointments/Sign"><button>Sign In</button></Link></td>
          </tr>
      </table>
    );
  }
}

export default Appointments
