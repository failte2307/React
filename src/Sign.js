import React from 'react'
import { Link } from 'react-router-dom'

class Sign extends React.Component {
  render() {
    return (
      <h1>Visitor has been signed in. <Link to="/">Click here</Link> to return home</h1>
    );
  }
}

export default Sign
