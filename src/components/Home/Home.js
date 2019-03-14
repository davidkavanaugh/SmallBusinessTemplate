import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Blog from '../Blog/Blog';


class Home extends Component {
  render() {
    return (
      <div id="home">
        <NavBar />  
        <Section1 />
        <Section2 />
        <Section3 />
        <Blog />
      </div>
    )
  }
}
export default Home
