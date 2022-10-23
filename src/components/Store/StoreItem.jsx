import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const StoreItem = (props) => {
  const { id, img1, brand, model, price, category, down_payment } = props.item
  const exists = props.itemExists(id)
  const categoryURL = category.toLowerCase()

  const calcPayment = (price, downPayment) => {
    let perMo = (price - downPayment + (downPayment && 1)) / 24
    return perMo.toFixed(2)
  }

  return (
    <div className="shop-item-container">
      <Link onClick={props.itemPage} key={id} to={`/item/${categoryURL}/${id}`}>
        <div className="shop-item">
          <div className="img-wrap">
            <img src={img1} alt="mobile1" />
          </div>
          <div className="shop-item-info">
            <div className="brand">{brand}</div>
            <div className="model">{model}</div>
            <div className="price-info-wrap">
              <div className="price-info">
                <div className="monthly">
                  ${calcPayment(price, down_payment)}/mo.
                </div>
                <div className="info">for 24 mos.</div>
              </div>
              <div className="vert-hr"></div>
              <div className="price-info">
                <div className="down">
                  ${down_payment}.
                  {down_payment > 0 ? <span>99</span> : <span>00</span>}
                </div>
                <div className="info">down + tax</div>
              </div>
            </div>
            <div className="full-price">Full Price: ${price}.95</div>
          </div>
        </div>
      </Link>
      { exists
        ? <Button onClick={() => props.removeItem(id)} variant="danger">
            <i className="fas fa-minus-circle"></i>
            Remove Item
          </Button>
        : <Button onClick={() => props.addItem(props.item, 1)} variant="success">
            <i className="fas fa-plus-circle"></i>
            Add Item
          </Button>
      }
    </div>
  );
}

export default StoreItem;
