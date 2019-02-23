import React, { Component } from 'react';
import Header from './components/SideDrawer/SideDrawer';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        
      </div>
    )
  }
}
export default App
