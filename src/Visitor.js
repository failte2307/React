import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Prompt } from 'react-router'

class Visitor extends React.Component {
  render() {
    return (
      <div>
      <form>
        <label for="Reason">Reason for Visit:</label>
        <select>
          <option value="" disabled selected hidden>Please Choose...</option>
          <option value="interview">Interview</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="other">Other</option>
        </select>
        <label for="Name">Employee to Meet:</label>
        <input type="text" name="Name"/>
        <Link to="/Visitor/Message"><button>Send Message</button></Link>
      </form>
      </div>
    );
  }
}

export default Visitor
