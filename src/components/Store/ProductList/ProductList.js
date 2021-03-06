import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BuyButton from '../BuyButton/BuyButton';

import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://strapi-cms-lite.herokuapp.com/products/");
    if (!response.ok) {
      return
    }

    let products = await response.json()
    this.setState({ loading: false, products: products })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          {/* <h2 className="ProductList-title">Available Products ({this.state.products.length})</h2> */}
          <div className="ProductList-container">
            {this.state.products.map((product, index) => {
              return (
                <div className="ProductList-product" key={product.id}>
                  <Link className="flex" to={`/product/${product.id}`}>
                    <h3 className="product-list__name">{product.name}</h3>
                    <img src={`https://strapi-cms-lite.herokuapp.com/${product.image.url}`} />
                  </Link>
                  <BuyButton product={product} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default ProductList;