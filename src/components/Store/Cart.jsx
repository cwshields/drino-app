import React from "react";
import { Form, Button } from "react-bootstrap";

const Cart = (props) => {

  const { cart, cartOpen, toggleEl } = props
  const arrayCount = (item, num) => {
    if (!props.itemExists(item.id)) {
      props.addItem(item, num)
    } else {
      let obj = cart.find(obj => obj.id === item.id)
      let itemIndex = cart.indexOf(obj)
      cart[itemIndex].qty = num
    }
  }

  const logQty = () => {
    console.log(cart[0].qty)
  }

  return (
    <div className="cart-wrapper">
      {/* <Button className="logbtn" onClick={props.cart > 0 ? logQty : null}>logQty</Button> */}
      <button
        onClick={toggleEl}
        name="cartOpen"
        className={cartOpen ? "cart-btn" : "cart-btn slide-btn"}
        >
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <div className={cart.length > 0 ? "badge" : "display-none"}>
            {cart.length}
          </div>
        </div>
      </button>
      <div className={cartOpen ? "cart" : "cart slide-cart"}>
        <div className="cart-list-wrap">
          <h3 className="cart-title">Your cart</h3>
          {cart.length > 0 ? (
            cart.map((item) => {
              const { id, img1, brand, model, price,/* down_payment*/ } = item;
              return (
                <div className="cart-item" key={id}>
                  <div className="cart-item-img-wrap">
                    <img className="cart-item-img" src={img1} alt="item" />
                  </div>
                  <div>
                    <div className="model">{model}</div>
                    <div className="brand">{brand}</div>
                    <div className="price">{price}.99</div>
                    <Form.Group className="option form-required">
                      <Form.Control
                        onChange={(e) => arrayCount(item, e.target.value)}
                        className="form-input"
                        as="select"
                      >
                        <option value="1" defaultValue>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
              );
            })
          ) : (
            <h5>Add items to your cart</h5>
          )}
        </div>
        <div className="btn-group">
          <div>Total: { cart.length > 0 ? cart[0].qty : <span>0.00</span> }</div>
        </div>
        <Button className="checkout-btn" variant="success">
          Checkout
          <i className="fas fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
