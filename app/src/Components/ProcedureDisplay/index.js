import React, { Component } from 'react'
import {
  Link
//   Switch,
//   Route
} from 'react-router-dom'
import './index.css'
// import UnderConstruction from '../UnderConstruction'

class ProcedureDisplay extends Component {
  render () {
    return (
      <div className=''>
        <div className='container'>
          <div className='col'>
            <div className='row'>
              <div className='col'>
                <div className='row' >
                  {/* <Switch>
                    <Route path='/UnderConstruction' component={UnderConstruction} />
                  </Switch> */}
                  <div className='col bg-dark text-white'>
                    <Link to='/UnderConstruction' className=''><h4>Dry Eye</h4></Link>
                  </div>
                  <div className='col bg-light text-white'>
                    <Link to='/UnderConstruction' className=''><h4>Glaucoma</h4></Link>
                  </div>
                  <div className='col bg-dark text-white'>
                    <Link to='/UnderConstruction' className=''> <h4>Diabetic Retinopathy</h4></Link>
                  </div>
                  <div className='col bg-light text-white'>
                    <Link to='/UnderConstruction' className=''> <h4>Macular Degeneration</h4></Link>
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

export default ProcedureDisplay
