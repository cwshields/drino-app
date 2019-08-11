import React, { Component } from 'react';
import { Line, Doughnut, Pie, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: props.lineData,
      doughnutData: props.doughnutData,
      pieData: props.pieData,
      barData: props.barData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'right',
    location: 'City'
  }

  render() {
    return (
      <div>
        <div className="charts-wrap">
          <div className="line-chart">
            <Line
              data={this.state.lineData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Monthly revenue (Year)'/* + this.props.location*/,
                  fontSize: 25
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                },
                options: {
                  hover: {
                    mode: 'nearest',
                    intersect: true
                  },
                  scales: {
                    xAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Month'
                      }
                    }],
                    yAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                      },
                    }]
                  }
                }
              }}
            />
          </div>
          <div className="doughnut-chart">
            <Doughnut height={200} width={200}
              data={this.state.pieData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Sales Breakdown',
                  fontSize: 24
                },
                legend: {
                  display: true,
                  position: 'top'
                },
                height: 400,
                width: 400
              }}
            />
          </div>
        </div>
        <div className="charts-wrap">
          <div className="doughnut-chart">
            <Pie height={200} width={200}
              data={this.state.pieData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Browser Usage',
                  fontSize: 24
                },
                legend: {
                  display: true,
                  position: 'top'
                },
                height: 400,
                width: 400
              }}
            />
          </div>
          <div className="line-chart">
            <Bar
              data={this.state.barData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Sales Breakdown'/* + this.props.location*/,
                  fontSize: 25
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                },
                options: {
                  hover: {
                    mode: 'nearest',
                    intersect: true
                  },
                  scales: {
                    xAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Month'
                      }
                    }],
                    yAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                      },
                    }]
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    lineData: reduxState.lineData,
    doughnutData: reduxState.doughnutData,
    pieData: reduxState.pieData,
    barData: reduxState.barData
  }
}

export default connect(mapStateToProps)(Charts);