import React, { Component } from 'react'
import '../../../assets/scss/App.scss'
// import { Link } from "react-router-dom";
import Charts from '../Charts/Charts';
import Welcome from '../../BootstrapComps/WelcomeAlert';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      userCount: props.userCount,
      sales: props.sales,
      revenue: props.revenue,
      bounceRate: props.bounceRate,
      timeUpdated: props.timeUpdated,
    }
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow = () => {
    this.setState({ show: false })
  }

  render() {
    const { toggleShow } = this
    const { show } = this.state
    const { userCount, timeUpdated, sales, revenue, bounceRate } = this.props
    return (
      <div className='dash-body'>
        <div className="dash-section">
          {show === true ? <Welcome show={show} toggleShow={toggleShow} /> : null}
          <div className="status-card-wrap">
            <div className="status-card red">
              <div className="number">{userCount}</div>
              <div className="label">Users</div>
              <i className="fas fa-user-plus"></i>
              <hr className="red" />
              <div className="date">Updated: {timeUpdated}</div>
            </div>
            <div className="status-card blue">
              <div className="number">{sales}</div>
              <div className="label">Sales</div>
              <i className="fas fa-shopping-cart"></i>
              <hr className="blue" />
              <div className="date">Updated: {timeUpdated}</div>
            </div>
            <div className="status-card green">
              <div className="number">{revenue}</div>
              <div className="label">Revenue</div>
              <i className="fas fa-dollar-sign"></i>
              <hr className="green" />
              <div className="date">Updated: {timeUpdated}</div>
            </div>
            <div className="status-card yellow">
              <div className="number">{bounceRate}</div>
              <div className="label">Bounce Rate</div>
              <i className="fas fa-chart-line"></i>
              <hr className="yellow" />
              <div className="date">Updated: {timeUpdated}</div>
            </div>
          </div>
          <div className="">
            <Charts />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userCount: reduxState.userCount,
    sales: reduxState.sales,
    revenue: reduxState.revenue,
    bounceRate: reduxState.bounceRate,
    timeUpdated: reduxState.timeUpdated
  }
}

export default connect(mapStateToProps)(Home);