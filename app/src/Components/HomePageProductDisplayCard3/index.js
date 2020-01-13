import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'
import HomePageProduct3Image from '../HomePageProduct3Image'

class HomePageProductDisplayCard3 extends Component {
  render () {
    return (
      <div>
        <Card>
          <HomePageProduct3Image />
          <Card.Body>
            <Card.Text>
            Contact Lenses
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default HomePageProductDisplayCard3
