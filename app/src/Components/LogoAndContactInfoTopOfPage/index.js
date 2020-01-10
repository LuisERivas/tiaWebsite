import React, { Component } from 'react'
import './index.css'
import ClinicLogo1 from '../ClinicLogo1'
class LogoAndContactInfoTopOfPage extends Component {
  render () {
    return (
      <div className=''>
        <div className='container'>
          <div className=' col'>
            {/* top part of navbar */}
            <div className='row heightAdjustment001'>
              {/* holds clinic logo */}
              <div className=' col text-white heightAdjustment002 p-0 m-0'>
                <ClinicLogo1 />
              </div>
              {/* space */}
              <div className=' col-6' />
              {/* holds physical location information and social media */}
              <div className=' col bg-dark text-white'>
                <div className='row'>
                  <div className='col'>
                    {/* holds physical location */}
                    <div className='row'>
                      <div className='col pt-3 '>
                        <h5> 8732 Test Avenue, Suite 209 <br />
                           Martinez, CA 94531 <br />
                           Call/Text: (555)555-5555 <br />
                           Martinez, CA 94531
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Holds social media links */}
                <div className='row'>
                  <div className='col bg-primary'>
                        social media stuff
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default LogoAndContactInfoTopOfPage
