import React, { Component } from "react"

class AddItem extends Component {
  state = {
    quantity: 0,
    product: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItemListFunc(this.state.product)
  }

  handleProductList = (e) => {
    this.setState({product: e.target.value})
  }

  handleQuantity = (e) => {this.setState({quantity: e.target.value})}

  render() {

  let product = this.props.products.map(item => <option key={item.id} value={item.id}> {item.name}</option>)

  return (
    <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s5">
            <select className="browser-default" value={this.state.product} onChange={this.handleProductList}>
              <option disabled selected>Choose Product</option>
              {product}
            </select>
            </div>
            <div className="col s5">
            <select className="browser-default" value={this.state.quantity} onChange={this.handleQuantity}>
              <option disabled selected>Select Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            </div>
            <div className="col s2">
              <input type="submit" value="Add"/>
            </div>
          </div>
        </form>
      </div>
  );
}
}

export default AddItem;
