/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Footer from "../../Components/Dashboard/Footer";
import ListProduct from "../../Components/Dashboard/ListProduct/ListProduct";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Theme_setting_wrapper from "../../Components/Dashboard/Theme_setting_wrapper";

export default function Product() {
  return (
    <>
      <Theme_setting_wrapper />
      <Sidebar />
      <div className="main-panel">
        <ListProduct />
        <Footer />
      </div>
    </>
  );
}
