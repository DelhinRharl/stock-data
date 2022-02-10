import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import stocksReducer from './stocks';
import detailsReducer from './details';

const reducer = combineReducers({
  stocksReducer,
  detailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
