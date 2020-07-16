import React, { Component } from "react";
import "../../../assets/scss/messages.scss";
import { Accordion, Button } from "react-bootstrap";
import ProfileCard from "../../Profiles/ProfileCard";
// import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MessageCard from "./MessageCard";
import axios from "axios";

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      messagesSelected: [],
    };
    this.messageCard = React.createRef()
  }

  componentDidMount() {
    this.getMessages()
  }
  
  getMessages = () => {
    axios
    .get("/api/messages")
    .then((res) => {
      this.setState({ messages: res.data })
    })
    .catch((err) => console.log(err))
  }
  
  toggleSelect = (id) => {
    const { messagesSelected } = this.state
    const index = messagesSelected.indexOf(id)
    if (index < 0) {
      messagesSelected.push(id)
    } else {
      messagesSelected.splice(index, 1)
    }
    console.log(this.state.messagesSelected)
  }
  
  selectAll = () => {
    const { messages, messagesSelected } = this.state
    for (let i = 0; i < messages.length; i++) {
      const includes = messagesSelected.includes(messages[i].id)
      const checkBox = document.getElementById(messages[i].id)
      if (!includes) {
        messagesSelected.push(messages[i].id)
        checkBox.checked = true
      } else {
        this.setState({ messagesSelected: [] })
        checkBox.checked = false
      }
    }
  }

  deleteMessage = (id) => {
    axios
      .delete(`/api/messages/${id}`)
      .then(() => {
        this.getMessages()
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="dash-body">
        <div className="dash-section">
          <div className="messages-component-wrap">
            <div className="count-wrap">
              <ProfileCard />
              <div className="count">
                Messages: {this.state.messages.length}
              </div>
            </div>
            <div className="editor-messages">
              <div className="text-editor">
                {/* 
                  <Editor 
                    editorState={editorState}
                    toolbarClassName="toolbar"
                    wrapperClassName="wrapper"
                    editorClassName="editor"
                    onEditorStateChange={this.onEditorStateChange}
                  />
                */}
                <Button className="send-btn" variant="success">
                  Send
                </Button>
                <Button className="cancel-btn" variant="danger">
                  Cancel
                </Button>
              </div>
              <div className="messages-wrap">
                <div className="accordion-wrap">
                  <Accordion defaultActiveKey="0">
                    {this.state.messages.length === 0 
                    ? <h3 className="no-messages">No messages to display...</h3>
                    : this.state.messages.map((message, id) => (
                        <MessageCard
                          key={id}
                          message={message}
                          toggleSelect={this.toggleSelect}
                          deleteMessage={this.deleteMessage}
                        />
                      ))
                    }
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <Button variant="success" className="select-all" onClick={this.selectAll}>Select All</Button>
        </div>
      </div>
    );
  }
}
