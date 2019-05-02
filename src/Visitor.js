import React from 'react'

class Visitor extends React.Component {
  render() {
    return (
      <div>
      <h1>Visitor</h1>
      <form>
        <label for="Dept">Reason for Visit</label>
        <input type="text" name="Dept"/>
        <label for="Pass">Password</label>
        <input type="Password" name="Pass"/>
        <button>Confirm</button>
      </form>
      </div>
    );
  }
}

export default Visitor
