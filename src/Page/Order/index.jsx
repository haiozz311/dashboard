/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Footer from "../../Components/Dashboard/Footer";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Theme_setting_wrapper from "../../Components/Dashboard/Theme_setting_wrapper";

export default function Order() {
  return (
    <>
      <Theme_setting_wrapper />
      <Sidebar />
      <div className="main-panel">
        {/* <Table /> */}
        Order
        <Footer />
      </div>
    </>
  );
}
