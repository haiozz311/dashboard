import React, { useState, useEffect } from "react";
import MenuHeader from "../MenuHeader";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.css";
import CartItem from "./CartItem/CartItem";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../../../Redux/Actions/Cart";
import PriceDetail from "../PriceDetail/PriceDetail";

export default function CartPage() {
  const history = useHistory();
  const { cartItems, loading, error } = useSelector(
    (state) => state.CartReducer
  );
  const { UserInfor } = useSelector((state) => state.Auth);
  const [cartProduct, setCartProduct] = useState(cartItems);
  console.log("cartProduct", cartProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartProduct(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (UserInfor) {
      dispatch(getCartItems());
    }
  }, []);
  const onQuantityIncrement = (_id, qty) => {
    const { name, price, img } = cartProduct[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };
  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartProduct[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };
  const onRemoveCartItem = (_id) => {
    console.log("remove", _id);
    dispatch(removeCartItem({ productId: _id }));
  };
  return (
    <>
      {/* <MenuHeader /> */}
      <div className="delivery">
        <div className="delivery__inner">
          <div className="delivery__left">
            <div className="head__delivery">
              <h3>My Card</h3>
              <h3>Delivery to</h3>
            </div>
            {Object.keys(cartItems).map((item, index) => (
              <CartItem
                cartItem={cartItems[item]}
                onQuantityIncrement={onQuantityIncrement}
                onQuantityDecrement={onQuantityDecrement}
                onRemoveCartItem={onRemoveCartItem}
              />
            ))}
          </div>
          <PriceDetail
            totalItem={Object.keys(cartItems).reduce(function (qty, key) {
              return qty + cartItems[key].qty;
            }, 0)}
            totalPrice={Object.keys(cartItems).reduce((totalPrice, key) => {
              const { price, qty } = cartItems[key];
              return totalPrice + price * qty;
            }, 0)}
          />
        </div>
        <button
          onClick={() => {
            history.push(`/checkout`);
          }}
        >
          place order
        </button>
      </div>
    </>
  );
}
