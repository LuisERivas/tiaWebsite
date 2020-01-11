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
                  
                  <Navbar>
                    <div className='col'>
                      <Link to='/' className='container-fluid bg-dark ' > Home</Link>
                    </div>
                    <div className='col'>
                      <Link className='' to='/AppointmentPage'> Appointment </Link>
                    </div>
                    <div className='col'>
                      <Link to='' className='container-fluid bg-dark'> Reviews </Link>
                    </div>
                    <div className='col'>
                      <Link to='' className='container-fluid bg-dark'> What's New </Link>
                    </div>
                    <div className='col'>
                      <Link to='' className='container-fluid bg-dark'> Services </Link>
                    </div>
                    <div className='col'>
                      <Link to='' className='container-fluid bg-dark'> Eyewear </Link>
                    </div>
                    <div className='col'>
                      <Link to='' className='container-fluid bg-dark'> Contact </Link>
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
