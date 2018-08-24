import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store, { addReducer, removeReducer } from './redux/store'
import food from './redux/food'
import user from './redux/user'

class App extends Component {
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
    this.unsub = store.subscribe(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleStoreUpdate = () => {
    this.forceUpdate()
  }

  tick = () => store.dispatch({ type: 'tick' })

  handleLoginClick = () => store.dispatch({ type: 'login' })

  handleLogoutClick = () => store.dispatch({ type: 'logout' })

  handleEatCookie = () => store.dispatch({ type: 'eat cookie' })

  handleAddFoodClick = () => addReducer(store, 'food', food)

  handleRemoveFoodClick = () => removeReducer(store, 'food')

  handleAddUserClick = () => addReducer(store, 'user', user)

  handleRemoveUserClick = () => removeReducer(store, 'user')


  render() {
    const state = store.getState()
    const keys = Object.keys(state).sort()
    return (

      <div className="App">
        <h2>The State</h2>
        <div>
          { JSON.stringify(state) }
        </div>

        <h2>Reducers</h2>
        <div>
          { JSON.stringify(keys) }
        </div>

        <h2>Dispatch Events</h2>
        <div>
          <button onClick={this.handleLoginClick}>login</button>
          <button onClick={this.handleLogoutClick}>logout</button>
          <button onClick={this.handleEatCookie}>eat cookie</button>
        </div>

        <h2>Change Reducers</h2>
        <div>
          <button onClick={this.handleAddFoodClick}>add food</button>
          <button onClick={this.handleRemoveFoodClick}>remove food</button>
          <button onClick={this.handleAddUserClick}>add user</button>
          <button onClick={this.handleRemoveUserClick}>remove user</button>
        </div>
      </div>
    );
  }
}

export default App;
