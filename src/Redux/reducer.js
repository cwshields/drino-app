import axios from "axios";

//initialState
const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    img: '',
    login: false,
    isAdmin: false,
    isEmployee: false,
    jobTitle: '',
    description: '',
    userCount: 0,
    messageCount: 0,
    sales: 0,
    revenue: 0,
    bounceRate: 58.3,
    timeUpdated: '8/1/19 - 12:01am',
    notifications: '16',
    statusUpdates: '8',
}

//actions
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
const UPDATE_LASTNAME = 'UPDATE_LASTNAME'
const UPDATE_USERS_COUNT = 'UPDATE_USERS_COUNT'
const UPDATE_MESSAGES_COUNT = 'UPDATE_MESSAGES_COUNT'
const UPDATE_SALES_COUNT = 'UPDATE_SALES_COUNT'
const UPDATE_REVENUE = 'UPDATE_REVENUE'
const UPDATE_SESSION = 'UPDATE_SESSION'
const RESET_STATE = 'RESET_STATE'

//action creators
export function currentRevenue() {
    return {
      type: UPDATE_REVENUE,
      payload: axios.get('/api/revenue')
        .then(res => res.data)
    }
}
export function updateFirstName(firstname) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: axios.put('/auth/user', {})
    .then(res => res.data)
  }
}
export function updatelastName(lastname) {
  return {
    type: UPDATE_LASTNAME,
    payload: axios.put('/auth/user', {})
    .then(res => res.data)
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
export function countSales() {
  return {
    type: UPDATE_SALES_COUNT,
    payload: axios.get('/api/sales')
      .then(res => res.data)
  }
}
export function updateSession(userSession) {
  return {
    type: UPDATE_SESSION,
    payload: userSession
  }
}
export function resetState() {
  return {
    type: RESET_STATE
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
        messageCount: action.payload
      }
    case `${UPDATE_REVENUE}_FULFILLED`:
      return {
        ...state,
        revenue: +action.payload[0].sum
      }
    case `${UPDATE_SALES_COUNT}_FULFILLED`:
      return {
        ...state,
        sales: +action.payload[0].count
      }
    case UPDATE_SESSION:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        isEmployee: action.payload.isEmployee,
        img: action.payload.img,
        jobTitle: action.payload.jobTitle,
        description: action.payload.description,
        login: true,
      }
    case RESET_STATE: 
      return {
        initialState
      }
    default: return state;
  }
}