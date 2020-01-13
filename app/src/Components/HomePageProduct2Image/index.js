import React, { Component } from 'react'
import './index.css'
import Image from '../HomePageProduct2Image/Product2.jpg'

class HomePageProduct2Image extends Component {
  render () {
    return (
      <div className='bg-light'>
        <img src={Image} className='homePageProductImage01' alt='banner Image' />
      </div>
    )
  }
}

export default HomePageProduct2Image
