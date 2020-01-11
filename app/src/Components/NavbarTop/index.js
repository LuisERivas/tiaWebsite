import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
import { Navbar } from 'react-bootstrap'
import './index.css'
class NavbarTop extends Component {
  render () {
    return (
      <div className='bg-dark'>
        <div className='container'>
          <div className='col'>
            <div className='row'>
              {/* Bottom part of Navbar */}
              <div className='col container-fluid bg-dark'>
                <div className='row pt-2 pb-2'>
                  
                  <Navbar className='container-fluid'>
                    <div className='col'>
                      <Link to='/' className=' bg-light ' > Home</Link>
                    </div>
                    <div className='col'>
                      <Link className='bg-light' to='/AppointmentPage'> Appointment </Link>
                    </div>
                    <div className='col'>
                      <Link to='/ReviewsPage' className=' bg-light'> Reviews </Link>
                    </div>
                    <div className='col'>
                      <Link to='/WhatsNewPage' className=' bg-light'> What's New </Link>
                    </div>
                    <div className='col'>
                      <Link to='/ServicesPage' className=' bg-light'> Services </Link>
                    </div>
                    <div className='col'>
                      <Link to='/EyewearPage' className=' bg-light'> Eyewear </Link>
                    </div>
                    <div className='col'>
                      <Link to='/ContactPage' className='bg-light'> Contact </Link>
                    </div>
                  </Navbar>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarTop
