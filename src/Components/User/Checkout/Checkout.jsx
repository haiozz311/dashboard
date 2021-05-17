import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAddress } from "../../../Redux/Actions/Address";
import { getCartItems } from "../../../Redux/Actions/Cart";
import AddressForm from "./AddressForm";
import PriceDetail from "../PriceDetail/PriceDetail";
import CartItem from "../CartPage/CartItem/CartItem";
import { addToCart, removeCartItem } from "../../../Redux/Actions/Cart";
import { addOrder } from "../../../Redux/Actions/Address";

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

export default function Checkout(props) {
  const [newAddress, setNewAddress] = useState(false);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [address, setAddress] = useState([]);
  const [orderSummary, setOrderSummary] = useState(false);
  const [step3, setStep3] = useState(true);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    // setOrderSummary(true);
  };
  const { cartItems } = useSelector((state) => state.CartReducer);
  const selectAddress = (addr) => {
    const updateAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updateAddress);
    console.log("updateAddress", updateAddress);
  };
  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(true);
    setPaymentOption(true);
    setStep3(false);
  };
  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (adr) => {
    setSelectedAddress(adr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };
  const [cartProduct, setCartProduct] = useState(cartItems);
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
  const user = useSelector((state) => state.AddressReducer);
  console.log("user", user);
  const { UserInfor, token } = useSelector((state) => state.Auth);
  console.log("userInfor", UserInfor, token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
    dispatch(getCartItems());
  }, [token]);

  const onConfirmOrder = () => {
    const totalAmount = Object.keys(cartItems).reduce((totalPrice, key) => {
      const { price, qty } = cartItems[key];
      return totalPrice + price * qty;
    }, 0);
    const items = Object.keys(cartItems).map((key) => ({
      productId: key,
      payablePrice: cartItems[key].price,
      purchasedQty: cartItems[key].qty,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };

    console.log("payload addOrder", payload);
    dispatch(addOrder(payload));
    setConfirmOrder(true);
  };

  useEffect(() => {
    const Address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(Address);
  }, [user.address]);

  if (confirmOrder) {
    return <div>thanks</div>;
  }

  return (
    <div className="cartContainer">
      <div className="checkoutContainer">
        <CheckoutStep
          stepNumber={"1"}
          title={"LOGIN"}
          active={token}
          body={
            <div className="loggedInId">
              <p>{UserInfor?.fullName}</p>
              <span>{UserInfor?.email}</span>
            </div>
          }
        />
        <CheckoutStep
          stepNumber={"2"}
          title={"DELIVERY ADDRESS"}
          active={confirmAddress && token}
          body={
            <>
              {confirmAddress ? (
                <div className="location">{`${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
              ) : (
                address.map((adr) => (
                  <div className="flexRow addressContainer">
                    <div>
                      <input
                        type="radio"
                        onClick={() => selectAddress(adr)}
                        name="address"
                        // value={adr._id}
                      />
                    </div>
                    <div className="flexRow sb addressinfo">
                      {!adr.edit ? (
                        <div style={{ width: "100%" }}>
                          <div className="addressDetail">
                            <div>
                              <span className="addressName">{adr.name}</span>
                              <span className="addressType">
                                {adr.addressType}
                              </span>
                              <span className="addressMobileNumber">
                                {adr.mobileNumber}
                              </span>
                            </div>
                            {adr.selected && (
                              <button
                                onClick={() => enableAddressEditForm(adr)}
                              >
                                Edit
                              </button>
                            )}
                          </div>
                          <div className="fullAddress">
                            {adr.address} <br />{" "}
                            {`${adr.state} - ${adr.pinCode}`}
                          </div>
                          {adr.selected && (
                            <button onClick={() => confirmDeliveryAddress(adr)}>
                              Delivery
                            </button>
                          )}
                        </div>
                      ) : (
                        <AddressForm
                          withoutLayout={true}
                          onSubmitForm={onAddressSubmit}
                          initialData={adr}
                          onCancel={() => {}}
                        />
                      )}
                    </div>
                  </div>
                ))
              )}
            </>
          }
        />
        {confirmAddress ? null : newAddress ? (
          <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
        ) : token ? (
          <CheckoutStep
            stepNumber={"+"}
            title={`ADD NEW ADDRESS`}
            active={orderSummary}
            onClick={() => setNewAddress(true)}
          />
        ) : null}

        <CheckoutStep
          stepNumber={"3"}
          title={"ORDER SUMMARY"}
          active={orderSummary}
          body={
            orderSummary ? (
              step3 ? (
                <div>
                  {Object.keys(cartItems).map((item, index) => (
                    <CartItem
                      cartItem={cartItems[item]}
                      onQuantityIncrement={onQuantityIncrement}
                      onQuantityDecrement={onQuantityDecrement}
                      onRemoveCartItem={onRemoveCartItem}
                      disable={true}
                    />
                  ))}
                  <div
                    style={{
                      margin: "10px 0",
                    }}
                  >
                    <div
                      className="flexRow sb"
                      style={{
                        padding: "20px",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontSize: "12px" }}>
                        Order confirmation email will be sent to{" "}
                        {UserInfor?.email}
                        <strong>{user.email}</strong>
                      </p>
                      <button onClick={userOrderConfirmation}>CONTINUE</button>
                    </div>
                  </div>
                </div>
              ) : orderConfirmation ? (
                <div>{Object.keys(cartItems).length} Product</div>
              ) : null
            ) : null
          }
        />

        <CheckoutStep
          stepNumber={"4"}
          title={"PAYMENT OPTIONS"}
          active={paymentOption}
          body={
            paymentOption && (
              <div>
                <input type="radio" name="paymentOption" value="cod" />
                <div>Cash on delivery</div>
                <button onClick={onConfirmOrder}>Confirm Order</button>
              </div>
            )
          }
        />
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
  );
}
