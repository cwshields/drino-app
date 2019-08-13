import axios from "axios";

//initialState
const initialState = {
    firstName: 'Chase',
    lastName: 'Shields',
    userCount: 0,
    messageCount: 0,
    sales: 1345,
    revenue: 73631,
    bounceRate: 58.3,
    timeUpdated: '8/1/19 - 12:01am',
    notifications: '16',
    statusUpdates: '8',
    lineData: {
      labels: [
        'September', 'October', 'November', 'December', 'January', 'Febuary', 
        'March', 'April', 'May', 'June', 'July', 'August'
      ],
      datasets: [
        {
          label: 'Revenue',
          data: [
            57594, 61045, 53060, 52519, 62162, 65472, 
            55068, 56233, 74162, 64072, 77162, 73631
          ],
          backgroundColor: [
            'rgba(15, 92, 142, 0.6)'
          ]
        }
      ]
    },
    doughnutData: {
      labels: [
        'Model X', 'Sensation L3', 'Jerico DON', 'GV Mavid', 'Legacy Pro7', 'VIN Mono 6', 
      ],
      datasets: [
        {
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
        }
      ]
    },
    pieData: {
      labels: [
        'Google Chrome', 'Microsoft Edge', 'Opera', 'Internet Explorer', 'Firefox', 'Safari', 
      ],
      datasets: [
        {
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
        }
      ]
    },
    barData: {
      labels: [
        'Model X', 'Sensation L3', 'Jerico DON', 'GV Mavid', 'Legacy Pro7', 'VIN Mono 6', 
      ],
      datasets: [
        {
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
        }
      ]
    }
}

//actions
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_USERS_COUNT = 'UPDATE_USERS_COUNT'
const UPDATE_MESSAGES_COUNT = 'UPDATE_MESSAGES_COUNT'

//action creators
export function updateFirstName(firstname) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: axios.put('/auth/user', {})
  }
}
export function updatelastName(lastname) {
  return {
    type: UPDATE_LASTNAME,
    payload: axios.put('/auth/user', {})
  }
}
export function countUsers() {
  return {
    type: UPDATE_USERS_COUNT,
    payload: axios.get('/api/users')
      .then(res => res.data)
  }
}
export function countMessages() {
  return {
    type: UPDATE_MESSAGES_COUNT,
    payload: axios.get('/api/messages')
      .then(res => res.data)
  }
}
//reducer
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case UPDATE_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload
      }
    case UPDATE_LASTNAME:
      return {
        ...state,
        lastName: action.payload
      }
    case `${UPDATE_USERS_COUNT}_FULFILLED`:
      return {
        ...state,
        userCount: action.payload
      }
    case `${UPDATE_MESSAGES_COUNT}_FULFILLED`:
      return {
        ...state,
        userCount: action.payload
      }
    default: return state;
  }
}