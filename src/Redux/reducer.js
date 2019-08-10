import Axios from "axios";

//initialState
const initialState = {
    firstName: 'Chase',
    lastName: 'Shields',
    userCount: '346',
    sales: '1,345',
    revenue: '$73,631',
    bounceRate: '58.3%',
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

//action creators
export function updateFirstName(firstname) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: Axios.put('/auth/user', {})
  }
}
export function updatelastName(lastname) {
  return {
    type: UPDATE_LASTNAME,
    payload: Axios.put('/auth/user', {})
  }
}
//reducer
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case UPDATE_FIRSTNAME:
      return {
        ...state,
        username: action.payload
      }
    case UPDATE_LASTNAME:
      return {
        ...state,
        username: action.payload
      }
    default: return state;
  }
}