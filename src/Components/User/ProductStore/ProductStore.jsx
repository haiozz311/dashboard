import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getProductPageAction,
  getProductByslugAction,
} from "../../../Redux/Actions/Product";
import { Link } from "react-router-dom";

export default function ProductStore(props) {
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  });
  const { match } = props;
  const dispatch = useDispatch();
  const { productsBySlug, productsByPrice, loading, error } = useSelector(
    (state) => state.SlugReducer
  );
  useEffect(() => {
    if (match.params.slug !== "dashboard") {
      dispatch(getProductByslugAction(match.params.slug));
    }
  }, []);
  return (
    <>
      {Object.keys(productsByPrice).map((key, index) => (
        <div className="card" key={index}>
          <div className="cardHeader">
            <div>
              {props.match.params.slug} under {priceRange[key]}
            </div>
            <button>View all</button>
          </div>
          <div className="card__content">
            {productsByPrice[key].map((item, index) => (
              <Link
                to={`/${item.slug}/${item._id}`}
                className="productContainer"
                key={index}
              >
                <div className="productImgContainer">
                  {item.productPictures[0]?.img ? (
                    <img
                      src={`http://localhost:5000/public/${item.productPictures[0].img}`}
                      alt=""
                    />
                  ) : null}
                </div>
                <div className="productInfo">
                  <div>{item.name}</div>
                  <div>
                    <span>4.3</span>
                    <span>3353</span>
                  </div>
                </div>
                <div className="productPrice">{item.price}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
