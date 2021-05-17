import React, { useState } from "react";

export default function CartItem({
  cartItem,
  onQuantityIncrement,
  onQuantityDecrement,
  onRemoveCartItem,
  disable,
}) {
  console.log("child", cartItem.qty);
  const [qty, setQty] = useState(cartItem.qty);
  const { _id, name, price, img } = cartItem;
  const handleInCrement = () => {
    setQty(cartItem.qty + 1);
    onQuantityIncrement(_id, qty + 1);
  };
  console.log("object", qty);
  const handleDeCrement = () => {
    console.log("object1", qty);
    if (qty <= 1) return;
    setQty(qty - 1);
    onQuantityDecrement(_id, qty - 1);
  };
  return (
    <div className="content__delivery">
      <div className="product">
        <div className="item">
          <div className="cart__img">
            <img src={`http://localhost:5000/public/${img}`} alt="" />
          </div>
          <div className="cart__product">
            <p>{name}</p>
            <p>$ {price}</p>
          </div>
        </div>
        <div className="cover__form">
          <div>
            <div className="quantityControl">
              <button
                className={disable ? "hidden" : "block"}
                onClick={() => {
                  handleInCrement();
                }}
              >
                +
              </button>
              <input value={cartItem.qty} />
              <button
                className={disable ? "hidden" : "block"}
                onClick={() => {
                  handleDeCrement();
                }}
              >
                -
              </button>
            </div>
          </div>
          <button className="action" onClick={() => onRemoveCartItem(_id)}>
            Remove
          </button>
        </div>
      </div>
      <p className="time__delivery">Delivery in 3 - 5 day</p>
    </div>
  );
}
