import React, { useEffect } from "react";
import MenuHeader from "../MenuHeader";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../../../Redux/Actions/Product";
import {
  IoIosArrowForward,
  IoIosStar,
  IoMdCart,
  MdAttachMoney,
} from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import { AiFillThunderbolt } from "react-icons/ai";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { addToCart } from "../../../Redux/Actions/Cart";
import "./style.css";

export default function ProductDetailPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const productId = props.match.params;
    const payload = {
      params: productId,
    };
    console.log("payload", productId);
    dispatch(getProductByIdAction(payload));
  }, []);
  const { ProductDetail, loading, error } = useSelector(
    (state) => state.ProductReducer
  );
  console.log("ProductDetail", ProductDetail);
  return (
    <>
      <MenuHeader />
      <div className="container">
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="verticalImageStack">
              {ProductDetail?.product?.productPictures?.map((thumb, index) => (
                <div className="thumbnail">
                  <img
                    src={`http://localhost:5000/public/${thumb.img}`}
                    alt={thumb.img}
                  />
                </div>
              ))}
            </div>
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img
                  src={`http://localhost:5000/public/${ProductDetail?.product?.productPictures[0]?.img}`}
                  alt={`${ProductDetail?.product?.productPictures[0]?.img}`}
                />
              </div>

              {/* action buttons */}
              <div className="flexRow">
                <button
                  className="btn__card"
                  onClick={() => {
                    const { _id, name, price } = ProductDetail?.product;
                    const img = ProductDetail?.product?.productPictures[0].img;
                    const token = localStorage.getItem("token");
                    if (token) {
                      dispatch(addToCart({ _id, name, price, img }));
                      props.history.push(`/cart`);
                    } else {
                      alert("You have to login ");
                    }
                  }}
                >
                  <IoMdCart className="icons__card" />
                  ADD TO CART
                </button>
                <button className="btn__buynow">
                  <AiFillThunderbolt className="icons__buy" />
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="breed">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <IoIosArrowForward />
                </li>
                <li>
                  <a href="#">Mobiles</a>
                  <IoIosArrowForward />
                </li>
                <li>
                  <a href="#">Samsung</a>
                  <IoIosArrowForward />
                </li>
                <li>
                  <a href="#">{ProductDetail?.product?.name}</a>
                </li>
              </ul>
            </div>
            {/* product description */}
            <div className="productDetails">
              <p className="productTitle">{ProductDetail?.product?.name}</p>
              <div>
                <span className="ratingCount">
                  4.3 <IoIosStar />
                </span>
                <span className="ratingNumbersReviews">
                  72,234 Ratings & 8,140 Reviews
                </span>
              </div>
              <div className="extraOffer">
                Extra <AttachMoneyIcon />
                4500 off{" "}
              </div>
              <div className="flexRow priceContainer">
                <span className="price">
                  <AttachMoneyIcon />
                  {ProductDetail?.product?.price}
                </span>
                <span className="discount" style={{ margin: "0 10px" }}>
                  22% off
                </span>
              </div>
              <div>
                <p
                  style={{
                    color: "#212121",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Available Offers
                </p>
                <div>
                  <p
                    style={{
                      width: "100px",
                      fontSize: "18px",
                      color: "#878787",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    Description
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#212121",
                    }}
                  >
                    {ProductDetail?.product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
