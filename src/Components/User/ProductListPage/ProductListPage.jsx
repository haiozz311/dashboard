import React from "react";
import GetParams from "../../../Utils/GetParams";
import MenuHeader from "../MenuHeader";
import ProductPage from "../ProductPage/ProductPage";
import ProductStore from "../ProductStore/ProductStore";
import "./ProductListPage.css";

export default function ProductListPage(props) {
  const renderProduct = () => {
    console.log("props", props);
    const params = GetParams(props.location.search);
    console.log("params", params);
    let content = null;
    switch (params.typeProduct) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = null;
    }
    return content;
  };
  return (
    <>
      <MenuHeader />
      {renderProduct()}
    </>
  );
}
