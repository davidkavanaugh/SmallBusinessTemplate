import React, { Component } from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import './Section3.css';

const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");


class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
   }
 }

async componentDidMount() {
 try {
   const deals = await strapi.getEntries("deals")
   this.setState({ deals });
 } 
 catch(err) {
  alert(err);
 }
}

  render() {
    return (
      <div id="section_3" className="fullHeight">
        <h3>Section 3</h3>
        <div className="deals">
          {this.state.deals.map(deal =>
            <div className="deals__content">
              <div className="deal__name-and-description">
                <span className="deal__name">{deal.item}</span><br />
                <span className="deal__description">{deal.description}</span>
              </div><span className="dotted-line"></span>
              <div className="deal__price-per-unit">
                <span className="deal__price">${deal.price}</span><br />
                <span className="deal__unit">{deal.unit}</span> 
              </div>
            </div>
          )}
          </div>
          <div className="phonenumber">call <PhoneNumber/></div>
      </div>
    )
  }
}
export default Section3
