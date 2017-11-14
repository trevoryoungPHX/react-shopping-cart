import React from "react"
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

const ShoppingCart = (props) => {
  return (
    <div>
      <CartHeader />
      <CartItems />
      <CartFooter date2 ={props.date}/>
    </div>
  );
}

export default ShoppingCart;
