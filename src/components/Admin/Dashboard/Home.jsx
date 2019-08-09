import React, { Component } from 'react'
import '../../../assets/scss/App.scss'
// import { Link } from "react-router-dom";
import Charts from '../Charts/Charts';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          'January',
          'Febuary',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],
        datasets: [
          {
            label: 'Revenue',
            data: [
              57594,
              61045,
              53060,
              52519,
              62162,
              65472,
              55068,
              56233,
              74162,
              64072,
              77162,
              68072
            ],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <div className="status-card-wrap">
          <div className="status-card red">
            <div className="number">478</div>
            <div className="label">New Users</div>
            <i class="fas fa-user-plus"></i>
            <hr className="red" />
            <div className="date">Updated: 8/4/19 - 7:48pm</div>
          </div>
          <div className="status-card blue">
            <div className="number">1,272</div>
            <div className="label">Sales</div>
            <i class="fas fa-shopping-cart"></i>
            <hr className="blue" />
            <div className="date">Updated: 8/4/19 - 7:48pm</div>
          </div>
          <div className="status-card green">
            <div className="number">$68,072</div>
            <div className="label">Revenue</div>
            <i class="fas fa-dollar-sign"></i>
            <hr className="green" />
            <div className="date">Updated: 8/4/19 - 7:48pm</div>
          </div>
          <div className="status-card yellow">
            <div className="number">48.3%</div>
            <div className="label">Bounce Rate</div>
            <i class="fas fa-chart-line"></i>
            <hr className="yellow" />
            <div className="date">Updated: 8/4/19 - 7:48pm</div>
          </div>
        </div>
        <div className="charts-wrap">
          <div className="line-chart">
            <Charts chartData={this.state.chartData} location="Drino" legendPosition="bottom" />
          </div>
        </div>
      </div>
    );
  }
}