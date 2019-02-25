import React, { Component } from 'react';
import InstagramBtn from '../Buttons/InstagramBtn/InstagramBtn';
import FacebookBtn from '../Buttons/FacebookBtn/FacebookBtn';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer__contact">
          <span className="footer__phone">555-555-5555</span>|
          <span className="footer__email">email address</span>
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
