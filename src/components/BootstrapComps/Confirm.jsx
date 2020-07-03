import React, { Component } from "react";

var Confirm = require('react-confirm-bootstrap');

class Confirm extends Component {

  onConfirm = (id) => {
    Axios
      .delete(`/api/messages/${id}`)
      .then( () => {
        this.getMessages()
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Confirm
        onConfirm={this.onConfirm}
        body="Are you sure you want to delete this?"
        confirmText="Confirm Delete"
        title="Deleting Stuff"
      >
        <button>Delete Stuff</button>
      </Confirm>
    );
  }
}

export default Confirm;
