import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Strapi from "strapi-sdk-javascript/build/main";
import { Link } from 'react-router-dom';
import InstagramBtn from '../Buttons/InstagramBtn/InstagramBtn';
import FacebookBtn from '../Buttons/FacebookBtn/FacebookBtn';


import photo from '../../assets/corporate-photo.jpg';
import './Section2.css';

const strapi = new Strapi("http://localhost:1337");


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
        {/* {this.state.miscpages.map(miscpage => 
        <article key={miscpage.id}>
         <h3>{miscpage.title}</h3>
         <img src={`http://localhost:1337${miscpage.image.url}`} alt={miscpage.title} /><br />
         <div>{miscpage.content}</div>
        </article>
      )} */}
          <Hidden xsDown>
              {this.state.miscpages.map(miscpage =>
                <div className="column">
              <img src={`http://localhost:1337${miscpage.image.url}`} alt={miscpage.title} className="section2__photo1"/><br />
              </div>
              )}
          </Hidden>
          <div className="column">
          {this.state.miscpages.map(miscpage =>
                <div className="column">
                <h3 className="section2__title">{miscpage.title}</h3>
              </div>
              )}
              {this.state.miscpages.map(miscpage =>
                <Hidden smUp>
                  <img src={`http://localhost:1337${miscpage.image.url}`} alt={miscpage.title} className="section2__photo1"/><br />
                </Hidden>
                )}
                {this.state.miscpages.map(miscpage =>
                  <div>
                    <article>{miscpage.content}</article>
                  </div>
                )}
            
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




