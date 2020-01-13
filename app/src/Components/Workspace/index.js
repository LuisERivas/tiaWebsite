import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import './index.css'
import HomepageProductDisplay from '../HomepageProductDisplay'
import AppointmentPage from '../AppointmentPage'
import ReviewsPage from '../ReviewsPage'
import WhatsNewPage from '../WhatsNewPage'
import ServicesPage from '../ServicesPage'
import EyewearPage from '../EyewearPage'
import ContactPage from '../ContactPage'
import HomeBannerImage from '../HomeBannerImage'
import ProcedureDisplay from '../ProcedureDisplay'
import UnderConstruction from '../UnderConstruction'

class Workspace extends Component {
  render () {
    return (
      <div className=''>
        <div className='bg-dark'>
          <Switch>
            <Route exact path='/' component={HomeBannerImage} />
          </Switch>
        </div>
        <div className='bg-dark'>
          <div className='container'>
            <div className='col'>
              <div className='row'>
                <div className='col p-0 m-0'>
                  <Switch>
                    <Route exact path='/' component={HomepageProductDisplay} />
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
        <div className=''>
          <ProcedureDisplay />
          <Switch>
            <Route exact path='/UnderConstruction' component={UnderConstruction} />

          </Switch>
        </div>
      </div>
    )
  }
}

export default Workspace
