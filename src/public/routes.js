import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NestedRoute from './components/NestedRoute'

const BasicExample = () => (
  <Router>
    <NestedRoute />
  </Router>
)

ReactDOM.hydrate(<BasicExample />, document.getElementById('root'))
