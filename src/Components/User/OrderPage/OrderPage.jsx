import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../Redux/Actions/Address";

export default function OrderPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const { orders } = useSelector((state) => state.AddressReducer);

  return (
    <div>
      <div>{JSON.stringify(orders)}</div>
      <div>
        {orders?.map((item) =>
          item?.items?.map((item1) => (
            <>
              <img
                src={`http://localhost:5000/public/${item1.productId.productPictures[0].img}`}
                alt=""
              />
              <div>{item1.productId.name}</div>
              <div>{item1.payablePrice}</div>
              <div>{item.paymentStatus}</div>
            </>
          ))
        )}
      </div>
    </div>
  );
}
