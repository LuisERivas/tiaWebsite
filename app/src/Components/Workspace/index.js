import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import './index.css'
import Homepage from '../Homepage'
import AppointmentPage from '../AppointmentPage'

class Workspace extends Component {
  render () {
    return (
      <div className='bg-dark'>
        <div className='container '>
          <div className='col bg-danger'>
            <div className='row'>
              <div className='col p-0 m-0'>
                <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/AppointmentPage' component={AppointmentPage} />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workspace
