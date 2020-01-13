import React, { Component } from 'react'
import './index.css'
import HomePageBannerImage from '../HomePageBannerImageAsset/HomePageBannerImage01.jpg'

class HomeBannerImage extends Component {
  render () {
    return (
      <div className=''>
        <img src={HomePageBannerImage} className='homeBannerSize' alt='banner Image' />
      </div>
    )
  }
}

export default HomeBannerImage
