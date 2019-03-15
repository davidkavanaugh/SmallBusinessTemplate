import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Strapi from "strapi-sdk-javascript/build/main";
import { Link } from 'react-scroll'


import './Section1.css';


const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");


class Section1 extends Component {
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
      <div id="section_1" className="fullHeight lineHeight">
            {this.state.miscpages.slice(0, 1).map(miscpage =>
              <div className="home__text">
                <h1>{miscpage.title}</h1>
                <h2>{miscpage.subtitle}</h2>
                <Link 
                  to="section_2"
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <Button className="section-1__button"
                    variant="outlined" 
                    color="primary">
                    {miscpage.buttontext}
                  </Button>
                </Link>
              </div>
            )}
      </div>
    )
  }
}
export default Section1
