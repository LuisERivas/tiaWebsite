import React, { Component } from 'react'
import './index.css'
import Image from '../HomePageProduct4Image/Product4.png'

class HomePageProduct4Image extends Component {
  render () {
    return (
      <div className='bg-light'>
        <img src={Image} className='homePageProductImage001' alt='banner Image' />
      </div>
    )
  }
}

export default HomePageProduct4Image
