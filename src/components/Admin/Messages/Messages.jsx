import React, { Component } from 'react';
import '../../../assets/scss/messages.scss';
import { Accordion, Card, Button } from 'react-bootstrap';
import ProfileCard from '../../Profiles/ProfileCard';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="dash-body">
        <div className="dash-section">
          <div className="messages-component-wrap">
            <ProfileCard />
            <div className="editor-messages">
              <div className="text-editor">
                <Editor
                  // editorState={editorState}
                  toolbarClassName="toolbar"
                  wrapperClassName="wrapper"
                  editorClassName="editor"
                  // onEditorStateChange={this.onEditorStateChange}
                />
              </div>
              <div className="messages-wrap">
                <div className="accordion-wrap">
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="name-date">[Users Name] <div className="message-time">Sent: 8:19pm 8/11/19</div></div>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur sunt expedita quaerat earum possimus repudiandae aut quo laboriosam dignissimos tempora    in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab   dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos   quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium,   officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore impedit rem suscipit. Officiis blanditiis    eos velit doloribus tempore! Officia culpa, saepe mollitia vitae sint impedit consequatur ab!
                          <Button variant="success">Reply</Button>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>Aut quo laboriosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis et animi totam necessitatibus vel dignissimos quis ad asperiores illo placeat, aut, sed voluptatum?</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum?</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="3">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>Riosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="4">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>Repudiandae aut quo laboriosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Velit dignissimos optio similique cumque doloremque laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore impedit rem suscipit. Officiis blanditiis eos velit doloribus tempore!</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="5">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="5">
                        <Card.Body>Nulla pariatur sunt expedita quaerat earum possimus repudiandae aut quo laboriosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="6">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="6">
                        <Card.Body>Sunt expedita quaerat earum possimus repudiandae aut quo laboriosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="7">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="7">
                        <Card.Body>Velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore impedit rem suscipit. Officiis blanditiis eos velit doloribus?</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="8">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="8">
                        <Card.Body>Aboriosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore impedit.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="9">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="9">
                        <Card.Body>Consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore impedit rem.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="10">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="10">
                        <Card.Body>Qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="11">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="11">
                        <Card.Body>Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sed asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis numquam fugit aspernatur labore?</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="12">
                        [Users Name]
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="12">
                        <Card.Body>Arum possimus repudiandae aut quo laboriosam dignissimos tempora in a iusto corporis reprehenderit qui consequatur quibusdam facere, minus totam, laudantium porro suscipit! Ea placeat veritatis ullam officia eum ipsa cum aliquid nam ab dolores, optio sint reiciendis velit magnam voluptas maiores nulla, perspiciatis sit, explicabo beatae dolorem officiis. Sapiente, mollitia earum perspiciatis dignissimos quis ad asperiores illo placeat, aut, sed voluptatum? Aliquid nemo porro velit dignissimos optio similique cumque doloremque et animi totam necessitatibus vel laudantium, officiis quae unde dolorem? Vitae magnam dolorem aperiam, inventore fugiat tempore perspiciatis!</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}