import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'

class HomePageProductDisplayCard extends Component {
  render () {
    return (
      <div>
        <Card>
          <Card.Img variant='top' src='' />
          <Card.Body>
            <Card.Text>
            product lives here
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default HomePageProductDisplayCard
