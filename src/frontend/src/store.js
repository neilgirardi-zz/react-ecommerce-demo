/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/RootReducer'

export default function configureStore (initialState = {}) {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    ))
}
