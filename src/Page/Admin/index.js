/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Main_panel from '../../Components/Dashboard/Main_panel';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Theme_setting_wrapper from '../../Components/Dashboard/Theme_setting_wrapper';
export default function Admin() {
  return (
    <>
      <Theme_setting_wrapper />
      <Sidebar />
      <Main_panel />
    </>
  );
}
