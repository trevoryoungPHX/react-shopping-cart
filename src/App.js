import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  state = {
    items: [],
    products: [],
    year: 1999
  }

  componentDidMount = () => {
    Promise.all([
      fetch('http://localhost:8000/products'),
      fetch('http://localhost:8000/items')
    ])
      .then(responses => Promise.all(responses.map(res=>res.json())))
      .then(arr => {
        const products = arr[0]
        const rawItems = arr[1]
        const items = rawItems.map(item=>({
          id: item.id,
          product: products.find(p=>p.id===item.product_id), //look through product array, find the one that has the same ID, I want that to be the value of the product key. Find is a HOF, like filter, but guaranteed to only find one result.
          quantity: item.quantity
        }))
        this.setState({...this.state, products, items})
      })
  }

  handleItemAdded = async (item) =>  {
    let postResponse = await fetch('http://localhost:8000/items', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    let data = await postResponse.json();
    //babs
    const items = data.map(item=>({
      id: item.id,
      product: this.state.products.find(p=>p.id===item.product_id), //look through product array, find the one that has the same ID, I want that to be the value of the product key. Find is a HOF, like filter, but guaranteed to only find one result.
      quantity: item.quantity
    }))
    //babs
    console.log("data:", data);
    this.setState({items: items})
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart
          year={this.state.year}
          products={this.state.products}
          items={this.state.items}
          handleItemAdded={this.handleItemAdded}
        />
      </div>
    );
  }
}

export default App;
