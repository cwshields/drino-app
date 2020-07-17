import React, { Component } from 'react'
import { Form, Col, Button, Jumbotron } from 'react-bootstrap'
import '../../assets/scss/register.scss'
import DrinoNavbar from '../Navbar/DrinoNavbar'
import Footer from '../Navbar/Footer'

export default class Register extends Component {
  render () {
    return (
      <div className="reg-container">
        <DrinoNavbar></DrinoNavbar>
        <div className="reg-wrap">
          <div className="reg-form">
            <Jumbotron>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
  
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>
  
                <Form.Group controlId="formGridAddress1">
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
  
                <Form.Group controlId="formGridAddress2">
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
  
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Control />
                  </Form.Group>
  
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
  
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
  
                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
  
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Jumbotron>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

