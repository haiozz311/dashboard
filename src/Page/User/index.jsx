/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Table from "../../Components/Table";
import Theme_setting_wrapper from "../../Components/Theme_setting_wrapper";

export default function User() {
  return (
    <>
      <Theme_setting_wrapper />
      <Sidebar />
      <div className="main-panel">
        <Table />
        <Footer />
      </div>
    </>
  );
}
