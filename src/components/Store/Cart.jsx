import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Cart extends Component {
  render() {
    return (
      <div className="cart-wrapper">
        <button
          onClick={this.props.toggleEl}
          name="cartOpen"
          className={this.props.cartOpen ? "cart-btn" : "cart-btn slide-btn"}
        >
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <div className={this.props.cart ? "badge" : "display-none"}>
              {this.props.cart}
            </div>
          </div>
        </button>
        <div className={this.props.cartOpen ? "cart" : "cart slide-cart"}>
          <div className="btn-group">
            <Button className="" onClick={this.props.removeItem} variant="danger">
              <i className="fas fa-trash-alt"></i>
              Remove Item
            </Button>
            <Button className="" onClick={this.props.resetCart}>
              <i className="fas fa-retweet"></i>
              Reset
            </Button>
          </div>
          <Button className="checkout-btn" variant="success">
            Checkout
            <i className="fas fa-arrow-right"></i>
          </Button>
        </div>
      </div>
    );
  }
}

export default Cart;
