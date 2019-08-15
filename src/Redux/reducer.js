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