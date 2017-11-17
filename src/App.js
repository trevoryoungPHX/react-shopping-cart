import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart'


class App extends Component {

  state= {

    copyright: new Date().getFullYear(),

    items:[
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        { id: 4, product: { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 }, quantity: 4 },
        { id: 5, product: { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 }, quantity: 1 },
        { id: 6, product: { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 }, quantity: 3 },
        { id: 7, product: { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 }, quantity: 1 },
        { id: 8, product: { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 }, quantity: 6 },
        { id: 9, product: { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }, quantity: 1 },
      ],

    products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],

    runningTotal: 2620.83

}

updateItemList = (product, quantity) => {
  let changedItem = this.state.items.filter(item => item.product.id === parseInt(product))
  changedItem[0].quantity = quantity;
  this.setState({ items: this.state.items.concat(changedItem[0]) })

  let total= this.state.items.reduce((sum, item) => sum + (item.product.priceInCents * item.quantity), 0)
  this.setState({runningTotal: (total/100).toFixed(2)})

}


    render () {
      return (
      <div className="App">
        <ShoppingCart date={this.state.copyright}
                      items ={this.state.items}
                      products = {this.state.products}
                      updateItemFunc={this.updateItemList}
                      total = {this.state.runningTotal}/>
      </div>
    );
  }
}

export default App;
