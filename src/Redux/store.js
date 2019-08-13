import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'
import reducer from './reducer';
import chartReducer from './chartReducer';

const root = combineReducers(
  {
    reducer,
    chartReducer
  }
) 

export default createStore(root, applyMiddleware(promise));