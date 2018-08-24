import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './redux/store'

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

        <h2>Change Stuff</h2>
        <div>
          <button onClick={this.handleLoginClick}>login</button>
          <button onClick={this.handleLogoutClick}>logout</button>
        </div>
      </div>
    );
  }
}

export default App;
