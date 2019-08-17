import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line, Doughnut, Pie, Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { countMessages } from '../../../Redux/chartReducer';

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
    displayTitle: false,
    displayLegend: false,
    legendPosition: 'right',
    location: 'City'
  }

  componentDidMount() {
    this.props.countMessages()
  }
  
  componentDidUpdate() {
    this.props.countMessages()
  }

  render() {
    return (
      <div className="charts-wrap-group">
        <div className="charts-wrap">
          <Card className="chart1">
            <Card.Header>
              Monthly Revenue
              </Card.Header>
            <div className="line-chart">
              <Line
                data={this.props.lineData}
                options={{
                  responsive: true,
                  title: {
                    display: this.props.displayTitle,
                    text: 'Monthly revenue (Year)',
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
          </Card>
          <Card>
            <Card.Header>
              Sales Breakdown
            </Card.Header>
            <div className="doughnut-chart">
              <Doughnut height={200} width={200}
                data={this.state.doughnutData}
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
          </Card>
        </div>
        <div className="charts-wrap">
          <Card>
            <Card.Header>
              Browser Usage
            </Card.Header>
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
          </Card>
          <Card className="chart1">
            <Card.Header>
              Bounce Rate
            </Card.Header>
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
                          display: false,
                        },
                        ticks: {
                          scaleBeginAtZero: false,
                        }
                      }]
                    }
                  }
                }}
              />
            </div>
          </Card>
        </div>
      </div >
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    lineData: reduxState.chartReducer.lineData,
    doughnutData: reduxState.chartReducer.doughnutData,
    pieData: reduxState.chartReducer.pieData,
    barData: reduxState.chartReducer.barData
  }
}

export default connect(mapStateToProps, { countMessages })(Charts);