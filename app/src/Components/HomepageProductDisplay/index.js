import React, { Component } from 'react'
import './index.css'
import HomePageProductDisplayCard1 from '../HomePageProductDisplayCard1'
import HomePageProductDisplayCard2 from '../HomePageProductDisplayCard2'
import HomePageProductDisplayCard3 from '../HomePageProductDisplayCard3'
import HomePageProductDisplayCard4 from '../HomePageProductDisplayCard4'

class HomepageProductDisplay extends Component {
  render () {
    return (
      <div className=''>
        <div className='container pt-3'>
          <div className='col'>
            <div className='row'>
              <div className='col'>
                <HomePageProductDisplayCard1 />
              </div>
              <div className='col'>
                <HomePageProductDisplayCard2 />
              </div>
              <div className='col'>
                <HomePageProductDisplayCard3 />
              </div>
              <div className='col'>
                <HomePageProductDisplayCard4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomepageProductDisplay
