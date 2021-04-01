import React from "react";
import Theme_setting_wrapper from '../../Components/Theme_setting_wrapper';
import Right_sidebar from '../../Components/Right_sidebar';
import Sidebar from '../../Components/Sidebar';
import Main_panel from '../../Components/Main_panel';
export default function Admin() {
  return (
    <>
      <Theme_setting_wrapper />
      <Right_sidebar />
      <Sidebar />
      <Main_panel />
    </>
  );
}
