import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'
import reducer from './reducer';
import chartReducer from './chartReducer';
import salesReducer from './salesReducer';

const root = combineReducers(
  {
    reducer,
    chartReducer,
    salesReducer
  }
) 

export default createStore(root, applyMiddleware(promise));