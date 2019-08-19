import React, { Component } from 'react'
import '../../assets/scss/App.scss'
import '../../assets/scss/EmployeeProfile.scss'
import Header from '../Navbar/Header'
import ProfileCard from './ProfileCard';
import CountUp from 'react-countup'
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const { timeUpdated, sales, revenue } = this.props
    const products = [
      {
        id: 1,
        name: "VIN Mono 6",
        price: 249
      },
      {
        id: 2,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 3,
        name: "ModelX",
        price: 499
      },
      {
        id: 4,
        name: "Sensation L3",
        price: 374
      },
      {
        id: 5,
        name: "Jerico N",
        price: 239
      },
      {
        id: 6,
        name: "ModelX",
        price: 499
      },
      {
        id: 7,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 8,
        name: "ModelX",
        price: 499
      },
      {
        id: 9,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 10,
        name: "ModelX",
        price: 499
      },
      {
        id: 11,
        name: "Sensation L3",
        price: 374
      },
      {
        id: 12,
        name: "Jerico N",
        price: 239
      },
      {
        id: 13,
        name: "ModelX",
        price: 499
      },
      {
        id: 14,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 15,
        name: "ModelX",
        price: 499
      },
      {
        id: 16,
        name: "VIN Mono 6",
        price: 249
      },
      {
        id: 17,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 18,
        name: "ModelX",
        price: 499
      },
      {
        id: 19,
        name: "Sensation L3",
        price: 374
      },
      {
        id: 20,
        name: "Jerico N",
        price: 239
      },
      {
        id: 21,
        name: "ModelX",
        price: 499
      },
      {
        id: 22,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 23,
        name: "ModelX",
        price: 499
      },
      {
        id: 24,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 25,
        name: "ModelX",
        price: 499
      },
      {
        id: 26,
        name: "Sensation L3",
        price: 374
      },
      {
        id: 27,
        name: "Jerico N",
        price: 239
      },
      {
        id: 28,
        name: "ModelX",
        price: 499
      },
      {
        id: 29,
        name: "GV Mavid",
        price: 80
      },
      {
        id: 30,
        name: "ModelX",
        price: 499
      },
      {
        id: 31,
        name: "Jerico N",
        price: 239
      },
      {
        id: 32,
        name: "ModelX",
        price: 499
      },
    ];
    return (
      <div className="employee-profile">
        <Header></Header>
        <div className="profile-wrap">
          <div className="card-btn-wrap">
            <ProfileCard />
            <Button variant="success" className="add-btn">
              <i className="fas fa-plus"></i> Add Sale
            </Button>
          </div>
          <div className="info-wrap">
            <div className="status-card-wrap">
              <div className="status-card blue">
                <div className="number" id="root">
                  <CountUp start={0} end={43} duration={1.6} separator="," />
                </div>
                <div className="label">Sales</div>
                <i className="fas fa-shopping-cart"></i>
                <hr className="blue" />
                <div className="date">Updated: 8/18/19 - 12:01AM{timeUpdated}</div>
              </div>
              <div className="status-card green">
                <div className="number">
                  <CountUp start={0} end={2547} duration={1.6} separator="," prefix="$" />
                </div>
                <div className="label">Revenue</div>
                <i className="fas fa-dollar-sign"></i>
                <hr className="green" />
                <div className="date">Updated: 8/18/19 - 12:01AM{timeUpdated}</div>
              </div>
            </div>
            <BootstrapTable data={products} pagination>
              <TableHeaderColumn dataField='id' isKey={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}
