import React from "react";
import CartItem from "./CartItem";

const CartItems = (props) => {
  return (
    <div className="container">
        <h1>Items</h1>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          <div className= "collection-item">
          {props.items.map((item, index) => <CartItem key={index} item={item}/>)}
      </div>
      </div>
      <div>
        <b>Total</b>: {props.total}
        <br></br>
          <br></br>

      </div>
</div>

  );
}

export default CartItems;
