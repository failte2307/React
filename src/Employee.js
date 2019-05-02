import React from 'react'

class Employee extends React.Component {
  render() {
    return (
      <div>
      <h1>Employees</h1>
      <form>
        <label for="Dept">Department</label>
        <input type="text" name="Dept"/>
        <label for="Pass">Password</label>
        <input type="Password" name="Pass"/>
        <button>Confirm</button>
      </form>
      </div>
    );
  }
}

export default Employee
