import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Strapi from "strapi-sdk-javascript/build/main";
import InstagramBtn from '../Buttons/InstagramBtn/InstagramBtn';
import FacebookBtn from '../Buttons/FacebookBtn/FacebookBtn';
import Markdown from 'markdown-to-jsx';

import './Section2.css';

const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");


class Section2 extends Component {
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
      <div id="section_2" className="fullHeight">
        <section>
          <Hidden xsDown>
          {this.state.miscpages.slice(1, 2).map(miscpage =>
                <div className="column">
              <img src={`https://strapi-cms-lite.herokuapp.com${miscpage.image.url}`} alt={miscpage.title} className="section2__photo1"/><br />
              </div>
              )}
          </Hidden>
          <div className="column">
              {this.state.miscpages.slice(1, 2).map(miscpage =>
                <div className="column">
                <h3 className="section2__title">{miscpage.title}</h3>
              </div>
              )}
              {this.state.miscpages.slice(1, 2).map(miscpage =>
                <Hidden smUp>
                  <img src={`https://strapi-cms-lite.herokuapp.com${miscpage.image.url}`} alt={miscpage.title} className="section2__photo1"/><br />
                </Hidden>
                )}
              {this.state.miscpages.slice(1, 2).map(miscpage =>
                  <div>
                    <article><Markdown>{miscpage.content}</Markdown></article>
                    <h4 className="phonenumber lineHeight">{miscpage.phone}</h4>
                    <h4 className="emailaddress lineHeight">{miscpage.email}</h4> 
                  </div>

                )}
            
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




