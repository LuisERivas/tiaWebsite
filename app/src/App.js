import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Homepage from './Components/Homepage'
import NavbarTop from './Components/NavbarTop'
import LogoAndContactInfoTopOfPage from './Components/LogoAndContactInfoTopOfPage'
import AppointmentPage from './Components/AppointmentPage'
import Workspace from './Components/Workspace'

function App () {
  return (
    <div className='App bg-danger'>
      <Router>
        <LogoAndContactInfoTopOfPage />
        <NavbarTop />
        <Workspace>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route exact path='/AppointmentPage' component={AppointmentPage} />
          </Switch>
        </Workspace>

      </Router>
    </div>
  )
}

export default App
