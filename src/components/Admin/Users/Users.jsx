import React, { Component } from 'react';
import '../../../assets/scss/users.scss';
import ProfileCard from '../../Profiles/ProfileCard';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Axios from 'axios';

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const cellEditProp = {
      mode: 'dbclick'
    };
    return (
      <div className="dash-body">
        <div className="dash-section">
          <div className="users-wrap">
            <div className="count-wrap">
              <ProfileCard />
              <div className="count">Users: {this.state.users.length}</div>
            </div>
            <BootstrapTable insertRow={true} exportCSV={true} ref='table' data={this.state.users} cellEdit={cellEditProp} pagination search>
              <TableHeaderColumn width="80" dataField='id' isKey={true} dataSort={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='first_name' dataSort={true}>First Name</TableHeaderColumn>
              <TableHeaderColumn dataField='last_name' dataSort={true}>Last Name</TableHeaderColumn>
              <TableHeaderColumn dataField='username' dataSort={true}>Username</TableHeaderColumn>
              <TableHeaderColumn width="300" dataField='email' dataSort={true}>Email</TableHeaderColumn>
              <TableHeaderColumn width="130" dataField='is_employee' dataSort={true}>isEmployee</TableHeaderColumn>
              <TableHeaderColumn width="100" dataField='is_admin' dataSort={true}>isAdmin</TableHeaderColumn>
              <TableHeaderColumn width="150" dataField='job_title' dataSort={true}>job_title</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}