import React from 'react';
import CartItem from './CartItem'

const CartItems = (props) => {
  let itemsList = props.items.map(item => <CartItem key={item.id} theItem={item}/>)
  let total = props.items.reduce((sum, item) => sum + (item.product.priceInCents * item.quantity), 0)
  let finalTotal = (total/100).toFixed(2)

  return (

      <div className="container">
        <h1>Items</h1>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          {itemsList}
        </div>
        <h3>Total: {finalTotal}</h3>
    </div>
  )
}

export default CartItems;
