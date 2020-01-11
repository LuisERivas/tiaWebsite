import React, { Component } from 'react'
import './index.css'
import HomePageProductDisplayCard from '../HomePageProductDisplayCard'

class Homepage extends Component {
  render () {
    return (
      <div className='bg-dark'>
        <div className='container pt-3'>
          <div className='col bg-primary'>
            <div className='row'>
              <div className='col'>
                <HomePageProductDisplayCard />
              </div>
              <div className='col'>
                <HomePageProductDisplayCard />
              </div>
              <div className='col'>
                <HomePageProductDisplayCard />
              </div>
              <div className='col'>
                <HomePageProductDisplayCard />
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className=' bg-danger'>
            ugly boi
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
