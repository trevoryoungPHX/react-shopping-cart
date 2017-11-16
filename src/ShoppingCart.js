import React, { Component } from "react"
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from "./AddItem"

class ShoppingCart extends Component {
  render() {
  return (
    <div>
      <CartHeader />
      <CartItems items = {this.props.items}/>
      <AddItem products={ this.props.products } itemAdded={ this.handleItemAdded }  />
      <CartFooter date ={this.props.date}/>
    </div>
  );
}
}

export default ShoppingCart;
