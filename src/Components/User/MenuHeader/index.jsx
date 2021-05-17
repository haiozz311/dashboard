import React, { useEffect } from "react";
import "./menuHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../../Redux/Actions/Category";
import { useHistory } from "react-router-dom";

export default function MenuHeader() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);
  const { ListCategory } = useSelector((state) => state.CategoryReducer);
  const renderCategories = (ListCategory) => {
    let categories = [];
    for (let category of ListCategory) {
      categories.push(
        <li key={category.name}>
          {category.parentId ? (
            // <a
            //   href={`/${category.slug}?cid=${category._id}&typeProduct=${category.type}`}
            // >
            //   {category.name}
            // </a>
            <p className="title_child"
              onClick={() => {
                history.push(
                  `/${category.slug}?cid=${category._id}&typeProduct=${category.type}`
                );
              }}
            >
              {category.name}
            </p>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return categories;
  };
  return (
    <div className="menuHeader">
      <ul>{ListCategory.length > 0 ? renderCategories(ListCategory) : null}</ul>
    </div>
  );
}
