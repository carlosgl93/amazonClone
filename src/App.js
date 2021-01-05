import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Views/Checkout"
import Login from "./Views/Login"
import Homepage from "./Views/Homepage"
import Header from "./Components/Header"


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Homepage/>
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
