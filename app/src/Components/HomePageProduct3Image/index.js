import React, { Component } from 'react'
import './index.css'
import Image from '../HomePageProduct3Image/Product3.jpg'

class HomePageProduct3Image extends Component {
  render () {
    return (
      <div className='bg-light'>
        <img src={Image} className='homePageProductImage' alt='banner Image' />
      </div>
    )
  }
}

export default HomePageProduct3Image
