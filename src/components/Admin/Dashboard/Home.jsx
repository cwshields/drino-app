import React, { Component } from 'react'
import '../../../assets/scss/App.scss'
// import { Link } from "react-router-dom";
import Charts from '../Charts/Charts';
import Welcome from '../../BootstrapComps/WelcomeAlert';
import { connect } from 'react-redux';
import CountUp from 'react-countup';
import { countUsers, currentRevenue, countSales } from '../../../Redux/reducer';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      // userCount: props.userCount,
      // sales: props.sales,
      // revenue: props.revenue,
      // bounceRate: props.bounceRate,
      // timeUpdated: props.timeUpdated,
    }
  }

  
  componentDidMount() {
    this.getInfo()
  }
  getInfo = () => {
    this.props.currentRevenue()
    this.props.countSales()
    this.props.countUsers()
  }
  toggleShow = () => {
    this.setState({ show: false })
  }

  render() {
    const { toggleShow } = this
    const { show } = this.state
    const { userCount, timeUpdated, sales, revenue, bounceRate } = this.props
    console.log(this.props)
    return (
      <div className='dash-body'>
        <div className="dash-section">
          { show === true 
            ? <Welcome show={show} toggleShow={toggleShow} /> 
            : null }
            {
              revenue === undefined ?
              null : (
                <div className="status-card-wrap">
                  <div className="status-card red rm">
                    <div className="number"><CountUp start={0} end={userCount} duration={1.6} separator="," /></div>
                    <div className="label">Users</div>
                    <i className="fas fa-user-plus"></i>
                    <hr className="red" />
                    <div className="date">Updated: {timeUpdated}</div>
                  </div>
                  <div className="status-card blue rm">
                    <div className="number" id="root">
                      <CountUp start={0} end={sales} duration={1.6} separator="," />
                    </div>
                    <div className="label">Sales</div>
                    <i className="fas fa-shopping-cart"></i>
                    <hr className="blue" />
                    <div className="date">Updated: {timeUpdated}</div>
                  </div>
                  <div className="status-card green rm">
                    <div className="number">
                      <CountUp start={0} end={revenue} duration={1.6} separator="," prefix="$" />
                    </div>
                    <div className="label">Revenue</div>
                    <i className="fas fa-dollar-sign"></i>
                    <hr className="green" />
                    <div className="date">Updated: {timeUpdated}</div>
                  </div>
                  <div className="status-card yellow">
                    <div className="number">
                      <CountUp start={0} end={32.7} duration={1.6} separator="," decimal="." decimals={1} suffix="%" />
                    </div>
                    <div className="label">Bounce Rate</div>
                    <i className="fas fa-chart-line"></i>
                    <hr className="yellow" />
                    <div className="date">Updated: {timeUpdated}</div>
                  </div>
                </div>
              )
            }

          <div className="charts-component">
            <Charts />
          </div>
          <div className="news-wrap">
            <iframe 
              src="https://feed.mikle.com/widget/v2/114407/"
              title="rss"
              height="400px" 
              width="100%" 
              className="fw-iframe" 
              scrolling="no" 
              frameBorder="0" 
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    userCount: reduxState.reducer.userCount,
    sales: reduxState.reducer.sales,
    revenue: reduxState.reducer.revenue,
    bounceRate: reduxState.reducer.bounceRate,
    timeUpdated: reduxState.reducer.timeUpdated
  }
}

export default connect(mapStateToProps, { countUsers, currentRevenue, countSales })(Home);