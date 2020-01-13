import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'
import HomePageProduct4Image from '../HomePageProduct4Image'

class HomePageProductDisplayCard4 extends Component {
  render () {
    return (
      <div>
        <Card>
          <HomePageProduct4Image />
          <Card.Body>
            <Card.Text>
            Patient Education
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default HomePageProductDisplayCard4
