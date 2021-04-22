import React from "react";
import Header from "../Header";
export const AdminTemplate = (props) => {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        {props.children}
      </div>
    </div>
  );
};
export default AdminTemplate;
