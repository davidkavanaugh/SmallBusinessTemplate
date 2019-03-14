import React, { Component } from 'react';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router";



import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Store} />
          </Switch>
        </Router>
      <Footer />  

      </div>
    )
  }
}
export default App
