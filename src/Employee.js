import React from 'react'
import { Link } from 'react-router-dom'

class Employee extends React.Component {
  render() {
    return (
      <div class="form-style-7">
      <form>
        <label for="Username">Username</label>
        <input type="text" name="Name" placeholder="Enter you username"/>
        <label for="Dept">Department</label>
        <input type="text" name="Dept" placeholder="Enter you department"/>
        <label for="Pass">Password</label>
        <input type="Password" name="Pass" placeholder="Enter you password"/>
        <Link to="/Employee/Appointments"><button class="buttons">Confirm</button></Link>
      </form>
      </div>
    );
  }
}

export default Employee
