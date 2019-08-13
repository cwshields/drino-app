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
        57594, 61045, 53060, 52519, 62162, 65472,
        55068, 56233, 74162, 64072, 77162, 73631
      ],
      backgroundColor: [
        'rgba(15, 92, 142, 0.6)'
      ]
    }]
  },
  doughnutData: {
    labels: [
      'Model X', 'Sensation L3', 'Jerico DON', 'GV Mavid', 'Legacy Pro7', 'VIN Mono 6',
    ],
    datasets: [{
      label: 'Sales Breakdown',
      data: [
        294, 145, 67, 119, 82, 172
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
        294, 82, 60, 119, 185, 132
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
      'Model X', 'Sensation L3', 'Jerico DON', 'GV Mavid', 'Legacy Pro7', 'VIN Mono 6',
    ],
    datasets: [{
      label: 'Sales Breakdown',
      data: [
        294, 145, 60, 119, 82, 172
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
    payload: axios.get('/api/line-chart')
      // .then(res => res.data)
  }
}


export default function chartReducer(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_LINE_CHART}_FULFILLED`:
      return {
        ...state,
        lineData: action.payload
      }
      default:
        return state;
  }
}