import React from 'react'
import { Link } from 'react-router-dom'

class Message extends React.Component {
  render() {
    return (
      <h1>Message has been sent click <Link to="/">here</Link> to return home</h1>
    );
  }
}

export default Message
