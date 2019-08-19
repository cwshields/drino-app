import axios from "axios";

const initialState = {
  lineData: {
    labels: [
      'September', 'October', 'November', 'December', 'January', 'Febuary',
      'March', 'April', 'May', 'June', 'July', 'August'
    ],
    datasets: [{
      label: 'Revenue',
      data: [
        157594, 161045, 173060, 182519, 162162, 155472,
        165068, 156233, 144162, 154072, 157162, 162356
      ],
      backgroundColor: [
        'rgba(15, 92, 142, 0.6)'
      ]
    }]
  },
  doughnutData: {
    labels: [
      'Model X', 'Sensation L3', 'Jerico N', 'GV Mavid', 'Legacy Pro7', 'VIN Mono 6',
    ],
    datasets: [{
      label: 'Sales Breakdown',
      data: [
        294, 165, 67, 112, 82, 127
      ],
      backgroundColor: [
        '#75AD2C',
        '#00A0A8',
        '#5C5C5B',
        '#E95A0C',
        '#4C7FE2',
        '#E93838',
      ]
    }]
  },
  pieData: {
    labels: [
      'Google Chrome', 'Microsoft Edge', 'Opera', 'Internet Explorer', 'Firefox', 'Safari',
    ],
    datasets: [{
      label: 'Sales Breakdown',
      data: [
        35, 11, 8, 13, 19, 14
      ],
      backgroundColor: [
        '#4C7FE2',
        '#75AD2C',
        '#E93838',
        '#5C5C5B',
        '#E95A0C',
        '#00A0A8',
      ]
    }]
  },
  barData: {
    labels: [
      'March', 'April', 'May', 'June', 'July', 'August'
    ],
    datasets: [{
      label: 'Bounce Rate',
      data: [
        37, 45, 34, 41, 53, 48
      ],
      backgroundColor: [
        '#75AD2C',
        '#00A0A8',
        '#5C5C5B',
        '#E95A0C',
        '#4C7FE2',
        '#E93838',
      ]
    }]
  }
}

const UPDATE_LINE_CHART = 'UPDATE_LINE_CHART';

export function countMessages() {
  return {
    type: UPDATE_LINE_CHART,
    payload: axios.get('/api/revenue')
      .then(res => res.data)
  }
}


export default function chartReducer(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_LINE_CHART}_FULFILLED`:
    let newData = state
    newData.lineData.datasets[0].data[11] = +action.payload[0].sum
      return {
        ...state,
        lineData: newData.lineData
      }
      default:
        return state;
  }
}