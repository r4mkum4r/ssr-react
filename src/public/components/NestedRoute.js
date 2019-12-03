import React from 'react'
import { Link, Route } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const NestedRoute = () => (
  <div>
    <ul>
      <li>
        <Link to="/spa">Home</Link>
      </li>
      <li>
        <Link to="/spa/about">About</Link>
      </li>
      <li>
        <a href="/">back</a>
      </li>
    </ul>

    <hr />

    <Route exact path="/spa" component={Home} />
    <Route path="/spa/about" component={About} />
  </div>
)

export default NestedRoute
