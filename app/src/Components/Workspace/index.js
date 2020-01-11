import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import './index.css'
import Homepage from '../Homepage'
import AppointmentPage from '../AppointmentPage'
import ReviewsPage from '../ReviewsPage'
import WhatsNewPage from '../WhatsNewPage'
import ServicesPage from '../ServicesPage'
import EyewearPage from '../EyewearPage'
import ContactPage from '../ContactPage'
import HomeBannerImage from '../HomeBannerImage'

class Workspace extends Component {
  render () {
    return (
      <div className='bg-dark'>
        <Switch>
          <Route exact path='/' component={HomeBannerImage} />
        </Switch>
        <div className='container'>
          <div className='col bg-danger'>
            <div className='row'>
              <div className='col p-0 m-0'>
                <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/AppointmentPage' component={AppointmentPage} />
                  <Route exact path='/ReviewsPage' component={ReviewsPage} />
                  <Route exact path='/WhatsNewPage' component={WhatsNewPage} />
                  <Route exact path='/ServicesPage' component={ServicesPage} />
                  <Route exact path='/EyewearPage' component={EyewearPage} />
                  <Route exact path='/ContactPage' component={ContactPage} />
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
