import React from "react";
import "../../../assets/scss/messages.scss";
import { Accordion, Card, Button, Form } from "react-bootstrap";

export default function MessageCard(props) {
  const { message } = props;
  const {
    id,
    first_name,
    last_name,
    email,
    message: userMessage,
  } = props.message;
  return (
    <Card>
      <label htmlFor={id}>
        <Form.Check
          id={id}
          onClick={() => props.toggleSelect(id)}
          type="checkbox"
        />
      </label>
      <div className="card-wrap">
        <Accordion.Toggle as={Card.Header} eventKey={message}>
          <div className="message-header">
            <div className="name-email">
              <div className="name">
                {first_name} {last_name}
              </div>
              <div className="email">{email}</div>
            </div>
            <div className="time">2:13pm 6/21/20</div>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={message}>
          <Card.Body>
            {userMessage}
            <div className="btn-wrap">
              <Button href={"mailto:" + email} variant="success">
                Reply
              </Button>
              <Button variant="danger" onClick={props.deleteModalToggle}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </div>
    </Card>
  );
}
