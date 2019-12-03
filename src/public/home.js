import React from 'react'
import ReactDOM from 'react-dom'
import Greet from './components/Greet'

ReactDOM.hydrate(
  <Greet name={window.__INITIAL__DATA__.name} />,
  document.getElementById('root')
)
