import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'
import HomePageProduct2Image from '../HomePageProduct2Image'

class HomePageProductDisplayCard2 extends Component {
  render () {
    return (
      <div>
        <Card>
          <HomePageProduct2Image />
          <Card.Body>
            <Card.Text>
            Vision Exams
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default HomePageProductDisplayCard2
