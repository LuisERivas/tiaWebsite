import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import LogoAndContactInfoTopOfPage from './Components/LogoAndContactInfoTopOfPage'

function App () {
  return (
    <div className='App bg-danger'>
      <Router>
        <LogoAndContactInfoTopOfPage />
        <Navbar />

        <Switch>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
