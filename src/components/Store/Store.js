import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import StoreNav from './StoreNav/StoreNav';
import Product from './Product/Product';
import ProductList from './ProductList/ProductList';
import Button from '@material-ui/core/Button';


import './Store.css';

class Store extends Component {
  render() {
    return (
      <div id="store">
        <StoreNav />
        <div className="cart-btn">
          <span></span>
          <span></span>
          <Button variant="outlined" size="small" color="primary" className='snipcart-checkout snipcart-summary'>
          <i className="material-icons">shopping_cart</i>
          cart (<span className="snipcart-total-items"></span>)
          </Button>
        </div>
        <Router>
          <Switch>
            <Route path="/product" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Store;
