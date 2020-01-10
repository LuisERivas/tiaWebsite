import React, { Component } from 'react'
import './index.css'
import logo from './testLogo2.jpg'

class ClinicLogo1 extends Component {
  render () {
    return (
      <div>
        <img src={logo} className='topLogoSize' alt='logo' />

      </div>
    )
  }
}

export default ClinicLogo1
