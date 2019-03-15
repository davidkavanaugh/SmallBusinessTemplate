import React, { Component } from 'react';
import Strapi from "strapi-sdk-javascript/build/main";

const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");

class PhoneNumber extends Component {
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
      <div>
          {this.state.miscpages.map(miscpage =>
            <div>
                {miscpage.phone}
            </div>
            )}
        </div>

            )
          }
        }
        export default PhoneNumber