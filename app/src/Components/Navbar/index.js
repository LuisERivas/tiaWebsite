import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
import './index.css'

class Navbar extends Component {
  render () {
    return (
      <div className='bg-dark'>
        <div className='container'>
          <div className='col'>
            <div className='row'>
              {/* Bottom part of Navbar */}
              <div className='col container-fluid bg-dark'>
                <div className='row pt-2 pb-2'>
                  <Router>
                    <div className='col'>
                      <Link to='/' className='container-fluid bg-dark ' > Home</Link>
                    </div>
                    <div className='col'>
                      <Link to='/Appointment' className='container-fluid bg-dark'> Appointment </Link>
                    </div>
                    <div className='col'>
                      <Link to='/Reviews' className='container-fluid bg-dark'> Reviews </Link>
                    </div>
                    <div className='col'>
                      <Link to='/Reviews' className='container-fluid bg-dark'> What's New </Link>
                    </div>
                    <div className='col'>
                      <Link to='/Reviews' className='container-fluid bg-dark'> Services </Link>
                    </div>
                    <div className='col'>
                      <Link to='/Reviews' className='container-fluid bg-dark'> Eyewear </Link>
                    </div>
                    <div className='col'>
                      <Link to='/Reviews' className='container-fluid bg-dark'> Contact </Link>
                    </div>
                  </Router>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
