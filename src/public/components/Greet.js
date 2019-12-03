import React from 'react'

const Greet = (props) => (
  <React.Fragment>
    <h1>Welcome, {props.name}!</h1>

    <a href="/spa">SPA</a>
  </React.Fragment>
)

export default Greet
