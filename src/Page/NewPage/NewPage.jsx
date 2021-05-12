import React from "react";
import Footer from "../../Components/Dashboard/Footer";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Theme_setting_wrapper from "../../Components/Dashboard/Theme_setting_wrapper";
import Page from "../../Components/Dashboard/Page/Page";
export default function NewPage() {
  return (
    <>
      <Theme_setting_wrapper />
      <Sidebar />
      <div className="main-panel">
        {/* <Table /> */}
        <Page />
        <Footer />
      </div>
    </>
  );
}
