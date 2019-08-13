import React, { Component } from 'react';
import '../../../assets/scss/messages.scss';
import { Accordion, Card, Button } from 'react-bootstrap';
import Axios from 'axios';

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      firstName: 'John',
      lastName: 'Shukum'
    }
  }

  componentDidMount() {
    Axios
    .get('/api/users')
    .then(res => { this.setState({ messages: res.data }) })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.index}>
          <div className="name-date">[Users Name]{this.state.firstName}{this.state.lastName}<div className="message-time">Sent: 8:19pm 8/11/19</div></div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.index}>
          <Card.Body>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur sunt expedita quaerat earum possimus repudiandae aut quo laboriosam dignissimos tempora    in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab   dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos   quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium,   officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore impedit rem suscipit. Officiis blanditiis    eos velit doloribus tempore! Officia culpa, saepe mollitia vitae sint impedit consequatur ab!
            <div className="btn-wrap">
              <Button variant="success">Reply</Button>
              <Button variant="danger">Delete</Button>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}