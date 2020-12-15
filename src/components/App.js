import React, { Component } from 'react'
import './App.module.scss'
import history from './history';
import Invoice from './Invoice/Invoice'
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Invoice />
      // </div>
      <div className="container">
      <Router history={history}>
      <div>
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/invoice">
            <Invoice />
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    )
  }
}

export default App
