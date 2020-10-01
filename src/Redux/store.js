import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'
import reducer from './reducer';
import chartReducer from './chartReducer';
import storeReducer from './storeReducer';

const root = combineReducers(
  {
    reducer,
    chartReducer,
    storeReducer,
  }
) 

export default createStore(root, applyMiddleware(promise));