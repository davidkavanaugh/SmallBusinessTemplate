import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';

import photo from '../../assets/corporate-photo.jpg';
import './Section2.css';

class Section2 extends Component {
  render() {
    return (
      <div id="section_2" className="fullHeight">
      <section>
        <Hidden xsDown>
          <div class="column">
            <br /><br /><br /><img src={photo} alt="description" className="section2__photo1"/>
          </div>
        </Hidden>
        <div class="column"><h3 className="section2__title">Section 2</h3>
          <Hidden smUp>
            <img src={photo} alt="description" className="section2__photo1"/>
          </Hidden>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Arcu non odio euismod lacinia at quis risus sed. Neque sodales ut etiam sit amet nisl purus. Enim facilisis gravida neque convallis a cras semper auctor neque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Id neque aliquam vestibulum morbis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Arcu non odio euismod lacinia at quis risus sed. Neque sodales ut etiam sit amet nisl purus. Enim facilisis gravida neque convallis a cras semper auctor neque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Id neque aliquam vestibulum morbis.
          </p>
          <h4 class="phonenumber">(555) 555-5555</h4>
          <h4 class="emailaddress">email address</h4> 
          <h4 class="social">social icons</h4> 
        </div>
          
      </section>
          </div>

    )
  }
}
export default Section2
