import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'
import HomePageProduct1Image from '../HomePageProduct1Image'

class HomePageProductDisplayCard1 extends Component {
  render () {
    return (
      <div>
        <Card>
          <HomePageProduct1Image />
          <Card.Body>
            <Card.Text>
            Eyewear
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default HomePageProductDisplayCard1
