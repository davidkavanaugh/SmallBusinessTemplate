import React, { Component } from 'react';
import MoreInfo from './MoreInfo/MoreInfo';
import './Section1.css';

class Section1 extends Component {
  render() {
    return (
      <div id="section_1" className="fullHeight lineHeight">
        <div className="home__text">
          <h1>Company Name</h1>
          <h2>Slogan</h2>
          <MoreInfo />
        </div>
      </div>
    )
  }
}
export default Section1
