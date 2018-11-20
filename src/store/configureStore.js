import { createStore, applyMiddleware } from 'redux'
import { rootReducer, initialState } from '../reducers/index';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'

const logger = createLogger({
    collapsed: true,
    diff: true
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
