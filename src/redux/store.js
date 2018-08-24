import { createStore, combineReducers } from 'redux'

const ticks = (state = 0, action) =>
  (action.type === 'tick') ? state + 1 : state

const store = createStore(
  combineReducers({ ticks }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.reducers = {
  ticks,
}

export default store

const reloadReducers = (store) => {
  const combined = combineReducers(store.reducers)
  store.replaceReducer(combined)
  return store
}

export const addReducer = (store, name, reducer) => {
  store.reducers = {
    ...store.reducers,
    [name]: reducer,
  }
  return reloadReducers(store)
}

export const removeReducer = (store, name) => {
  delete store.reducers[name]
  return reloadReducers(store)
}
