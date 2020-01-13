import React, { Component } from 'react'
import './index.css'
import HomePageProductImage from '../HomePageProduct1Image/Product1.jpg'

class HomePageProduct1Image extends Component {
  render () {
    return (
      <div className='bg-light'>
        <img src={HomePageProductImage} className='homePageProductImage' alt='banner Image' />
      </div>
    )
  }
}

export default HomePageProduct1Image
