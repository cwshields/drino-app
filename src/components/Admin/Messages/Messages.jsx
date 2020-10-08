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
    }
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
  }
  
  selectAll = () => {
    const { messages, messagesSelected } = this.state
    const allSelected = messagesSelected.length === messages.length
    this.setState({ messagesSelected: allSelected ? [] : [...messages] })
    messages.forEach(message => {
      document.getElementById(message.id).checked = !allSelected
    })
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
    const { messages } = this.state
    return (
      <div className="dash-body">
        <div className="dash-section">
          <div className="messages-component-wrap">
            <div className="count-wrap">
              <ProfileCard />
              <div className="count">
                Messages: {messages.length}
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
                    {messages.length === 0 
                    ? <h3 className="no-messages">No messages to display...</h3>
                    : messages.map((message, id) => (
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
