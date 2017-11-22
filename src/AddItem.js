import React, { Component } from 'react'

class AddItem extends Component {

  state = {
    product_id: 0,
    quantity: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.itemAdded(this.state)
  }

  handleProductsList = (e) => {
    this.setState({ product_id: parseInt(e.target.value) })
  }

  handleQuantity = (e) => {
    this.setState({ quantity: parseInt(e.target.value) })
  }

  render () {
    let productList = this.props.products.map(product => {
      return (
        <option
          key={product.id}
          value={product.id}
        >
          {product.name}
        </option>
      )
    })
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s5">
            <select
              className="browser-default"
              value={this.state.product_id}
              onChange={this.handleProductsList}
            >
              <option selected>Choose Product</option>
              {productList}
            </select>
            </div>
            <div className="col s5">
            <select
              className="browser-default"
              value={this.state.quantity}
              onChange={this.handleQuantity}
            >
              <option selected>Select Quantity</option>
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
    )
  }
}

export default AddItem
