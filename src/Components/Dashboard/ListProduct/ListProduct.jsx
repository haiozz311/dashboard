import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../../Redux/Actions/Product";
import FormDialogProduct from "../FormDialogProduct";
import FormTable from "../FormTable";

export default function ListProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);
  // const { ListCategory } = useSelector((state) => state.CategoryReducer);
  // const renderCategories = (ListCategory) => {
  //   let categories = [];
  //   for (let category of ListCategory) {
  //     categories.push(
  //       <li key={category.name}>
  //         {category.name}
  //         {category.children.length > 0 ? (
  //           <ul>{renderCategories(category.children)}</ul>
  //         ) : null}
  //       </li>
  //     );
  //   }
  //   return categories;
  // };

  // const createCategoryList = (ListCategory, options = []) => {
  //   for (let category of ListCategory) {
  //     options.push({
  //       value: category._id,
  //       name: category.name,
  //     });
  //     if (category.children.lenght > 0) {
  //       createCategoryList(category.children, options);
  //     }
  //   }
  //   return options;
  // };
  return (
    <div>
      <FormDialogProduct />
      <FormTable />
      {/* <ul>{renderCategories(ListCategory)}</ul> */}
    </div>
  );
}
