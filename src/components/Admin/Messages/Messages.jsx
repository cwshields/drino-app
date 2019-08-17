import React, { Component } from 'react';
import '../../../assets/scss/messages.scss';
import { Accordion, Button } from 'react-bootstrap';
import ProfileCard from '../../Profiles/ProfileCard';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MessageCard from './MessageCard';
import Axios from 'axios';

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.getMessages()
  }

  getMessages = () => {
    Axios
      .get('/api/messages')
      .then(res => { this.setState({ messages: res.data }) })
      .catch(err => console.log(err))
  }

  deleteMessage = (id) => {
    Axios
      .delete(`/api/messages/${id}`)
      .then(res => {
        this.getMessages()
      })
      .catch(err => console.log(err));
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
                <Button className="send-btn" variant="success">Send</Button>
                <Button className="cancel-btn" variant="danger">Cancel</Button>
              </div>
              <div className="messages-wrap">
                <div className="accordion-wrap">
                  <Accordion defaultActiveKey="0">
                    {this.state.messages.length === 0
                      ? <h3 className='no-messages'>No messages to display...</h3>
                      : this.state.messages.map((message, id) => (
                        <MessageCard key={id} message={message} deleteMessage={this.deleteMessage} />
                      ))}
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