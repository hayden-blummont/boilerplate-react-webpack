import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <Router>
    <React.Fragment>
      <h1 style={{textAlign: 'center', fontSize: 50, color: '#1ca02e'}}>"WTFcanyoueat??"</h1>
      <Route exact path='/' component={Home}/>
    </React.Fragment>
    </Router>
  )
}

export default App
