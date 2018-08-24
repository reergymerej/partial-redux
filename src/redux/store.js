import { createStore, combineReducers } from 'redux'

const preloadedState = {}

const user = (state = null, action) => {
  switch (action.type) {
    case 'login':
      return { name: 'Dizzy', id: '112233xyz' }
    case 'logout':
      return null
    default:
      return state
  }
}

const ticks = (state = 0, action) =>
  (action.type === 'tick') ? state + 1 : state

const store = createStore(
  combineReducers({
    user,
    ticks,
  }),
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
