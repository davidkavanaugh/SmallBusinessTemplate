import React, { Component } from 'react';
import InstagramBtn from '../Buttons/InstagramBtn/InstagramBtn';
import FacebookBtn from '../Buttons/FacebookBtn/FacebookBtn';
import Strapi from "strapi-sdk-javascript/build/main";

import './Footer.css';

const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miscpages: []
   }
 }

async componentDidMount() {
 try {
   const miscpages = await strapi.getEntries("miscpages")
   this.setState({ miscpages });
 } 
 catch(err) {
  alert(err);
 }
}

  render() {
    return (
      <div id="footer">
        <div className="footer__contact">
          {this.state.miscpages.slice(1, 2).map(miscpage =>
            <div>
              <span className="footer__phone lineHeight">{miscpage.phone}</span>
              <span className="footer__email lineHeight">{miscpage.email}</span> 
            </div>
          )}
        </div><br />
        <div className="social">
            <InstagramBtn />
            <FacebookBtn />
        </div>
      </div>
    )
  }
}
export default Footer
