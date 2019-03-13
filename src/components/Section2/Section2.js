import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import InstagramBtn from '../Buttons/InstagramBtn/InstagramBtn';
import FacebookBtn from '../Buttons/FacebookBtn/FacebookBtn';


import photo from '../../assets/corporate-photo.jpg';
import './Section2.css';

class Section2 extends Component {
  render() {
    return (
      <div id="section_2" className="fullHeight">
        <section>
          <Hidden xsDown>
            <div className="column">
              <img src={photo} alt="description" className="section2__photo1"/>
            </div>
          </Hidden>
          <div className="column">
            <h3 className="section2__title">Section 2</h3>
            <Hidden smUp>
              <img src={photo} alt="description" className="section2__photo1"/>
            </Hidden>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Arcu non odio euismod lacinia at quis risus sed. Neque sodales ut etiam sit amet nisl purus. Enim facilisis gravida neque convallis a cras semper auctor neque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Id neque aliquam vestibulum morbis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Arcu non odio euismod lacinia at quis risus sed. Neque sodales ut etiam sit amet nisl purus. Enim facilisis gravida neque convallis a cras semper auctor neque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Id neque aliquam vestibulum morbis.
            </p>
            <h4 className="phonenumber lineHeight">(555) 555-5555</h4>
            <h4 className="emailaddress lineHeight">email address</h4> 
            <div className="social">
              <InstagramBtn />
              <FacebookBtn />
            </div>
        </div>
          
      </section>
          </div>

    )
  }
}
export default Section2
