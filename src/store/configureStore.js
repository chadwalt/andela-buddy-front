import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import andelaBuddyApp from '../reducers'

const logger = createLogger()

let store = createStore(andelaBuddyApp, applyMiddleware(thunk, logger))

export default store;

