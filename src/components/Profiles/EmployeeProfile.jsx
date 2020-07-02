import React, { Component } from 'react'
import '../../assets/scss/App.scss'
import '../../assets/scss/employeeProfile.scss'
import Header from '../Navbar/Header'
import ProfileCard from './ProfileCard';
import CountUp from 'react-countup'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux';
import { updateSession, sumRepSales } from '../../Redux/reducer';


class EmployeeProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/user')
      .then(res => {
        this.props.updateSession(res.data)
        axios
          .get('/api/get-sales')
          .then(res => { 
            // console.log(res.data)
            this.setState({ products: res.data })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    const { timeUpdated, repSales, /*repRevenue*/ } = this.props
    const cellEditProp = {
      mode: 'dbclick'
    };
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
                  <CountUp start={0} end={this.state.products.length} duration={1.6} separator="," />
                </div>
                <div className="label">Sales</div>
                <i className="fas fa-shopping-cart"></i>
                <hr className="blue" />
                <div className="date">Updated: 8/18/19 - 12:01AM{timeUpdated}</div>
              </div>
              <div className="status-card green">
                <div className="number">
                  <CountUp start={0} end={repSales} duration={1.6} separator="," prefix="$" />
                </div>
                <div className="label">Revenue</div>
                <i className="fas fa-dollar-sign"></i>
                <hr className="green" />
                <div className="date">Updated: 8/18/19 - 12:01AM{timeUpdated}</div>
              </div>
            </div>
            <BootstrapTable insertRow={true} exportCSV={true} ref='table' data={this.state.products} cellEdit={cellEditProp} pagination search>
              <TableHeaderColumn width="100" dataField='id' isKey={true} dataSort={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='product' dataSort={true}>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price' dataSort={true}>Price</TableHeaderColumn>
              <TableHeaderColumn dataField='amount' dataSort={true}>Amount</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    username: reduxState.reducer.username,
    email: reduxState.reducer.email,
    img: reduxState.reducer.img,
    repSales: reduxState.reducer.repSales
  }
}

export default connect(mapStateToProps, { updateSession, sumRepSales })(EmployeeProfile);