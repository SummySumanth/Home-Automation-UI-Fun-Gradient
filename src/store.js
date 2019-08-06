import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
  allReducers,
  applyMiddleware(thunk ,loggerMiddleware)
);

export default store;