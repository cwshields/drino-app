import React from 'react';
import '../../../assets/scss/messages.scss';
import { Accordion, Card, Button } from 'react-bootstrap';

const Messages = (props) => {
  const { message } = props
  const { first_name, last_name, email, message: userMessage } = props.message
  console.log(message);
  
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={message}>
        <div className="message-header">
          <div className="name-email">
            <div className="name">{first_name} {last_name}</div>
            <div className="email">{email}</div>
          </div>
          <div className="time">8:19pm 8/11/19</div>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={message}>
        <Card.Body>{userMessage}
          <div className="btn-wrap">
            <Button variant="success">Reply</Button>
            <Button variant="danger" onClick={ () => props.deleteMessage(message.id)}>Delete</Button>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default Messages