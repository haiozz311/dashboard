import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPageAction } from "../../../Redux/Actions/Product";
import GetParams from "../../../Utils/GetParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Card/Card";

export default function ProductPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = GetParams(props.location.search);
    console.log("params 123", params);
    const payload = { params };
    dispatch(getProductPageAction(payload));
  }, []);
  const { ListProductPage } = useSelector((state) => state.PageReducer);

  console.log("ListProductPage", ListProductPage.page);
  return (
    <div>
      {/* {JSON.stringify(ListProductPage)} */}
      <h3>{ListProductPage.title}</h3>

      <Carousel renderThumbs={() => {}}>
        {ListProductPage?.page?.banners &&
          ListProductPage?.page?.banners?.map((banner, index) => (
            <a
              key={index}
              style={{ display: "block" }}
              href={banner.navigateTo}
            >
              <img src={`http://localhost:5000${banner.img}`} alt="banner" />
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}
      >
        {ListProductPage?.page?.products &&
          ListProductPage?.page?.products?.map((product, index) => (
            <Card
              key={index}
              style={{
                width: "400px",
                height: "200px",
                margin: "0 5px",
                // overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={`http://localhost:5000${product.img}`}
                alt="product"
              />
            </Card>
          ))}
      </div>
    </div>
  );
}
