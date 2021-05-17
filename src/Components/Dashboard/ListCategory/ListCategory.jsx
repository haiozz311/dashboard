import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import CheckBoxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosCheckbox,
  IoIosCheckboxOutline,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  deleteCategoryAction,
  getAllCategoryAction,
  updateCategoryAction,
} from "../../../Redux/Actions/Category";
import FormDialog from "../FormDialog";
import Input from "../Input";
import "./ListCategory.css";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.25),
    marginBottom: theme.spacing(2),
  },
}));

export default function ListCategory() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [show, setShow] = useState(false);
  // const [categoryName, setCategoryName] = useState("");
  // const [parentCategoryId, setParentCategoryId] = useState("");
  // const [categoryImage, setCategoryImage] = useState("");
  // const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
  console.log("checkedArray", checkedArray);
  console.log("expandedArray", expandedArray);
  const handleClose = () => setShow(false);
  const handleCloseDeleteModal = () => {
    setDeleteCategoryModal(false);
  };
  const classes = useStyles();
  const updateCheckedAndExpandedCategories = () => {
    const categories = createCategoryList(ListCategory);
    console.log("categories", categories);
    const checkedArray = [];
    const expandedArray = [];
    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId === category.value
        );
        category && checkedArray.push(category);
      });

    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId === category.value
        );
        category && expandedArray.push(category);
      });
    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
  };
  const deleteCategories = async () => {
    const checkedIdsArray = checkedArray.map((item, index) => ({
      _id: item.value,
    }));
    const expandedIdsArray = expandedArray.map((item, index) => ({
      _id: item.value,
    }));
    const idsArray = expandedIdsArray.concat(checkedIdsArray);
    if (checkedIdsArray.length > 0) {
      await dispatch(deleteCategoryAction(idsArray));
      setDeleteCategoryModal(false);
    }
  };
  const handleUpdate = () => {
    setShow(true);
    updateCheckedAndExpandedCategories();
  };

  const handleDelete = () => {
    updateCheckedAndExpandedCategories();
    setDeleteCategoryModal(true);
  };

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.Auth);
  console.log("token111", token);
  useEffect(() => {
    if (token) {
      dispatch(getAllCategoryAction());
    }
  }, []);
  const { ListCategory } = useSelector((state) => state.CategoryReducer);

  const renderCategories = (ListCategory) => {
    let categories = [];
    for (let category of ListCategory) {
      categories.push({
        label: category.name,
        value: category._id,
        children:
          category.children.length > 0 && renderCategories(category.children),
      });
    }
    return categories;
  };

  const createCategoryList = (ListCategory, options = []) => {
    for (let category of ListCategory) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
        type: category.type,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCategoryInput = (key, value, index, type) => {
    console.log(value);
    if (type === "checked") {
      const updatedCheckedArray = checkedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setCheckedArray(updatedCheckedArray);
    } else if (type === "expanded") {
      const updatedExpandedArray = expandedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setExpandedArray(updatedExpandedArray);
    }
  };

  //delete modal

  const renderDeleteCategoryModal = () => {
    return (
      <Modal
        onHide={handleCloseDeleteModal}
        modalTitle="Confirm"
        show={deleteCategoryModal}
        handleClose={() => setDeleteCategoryModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Expanded</h5>
          {expandedArray.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
          <h5>Checked</h5>
          {checkedArray.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
          Are you sure
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              alert("no");
            }}
          >
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteCategories();
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderUpdateCategoryModal = () => (
    <Modal show={show} handleClose={handleClose} size="lg" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Expanded</p>
        {expandedArray.length > 0 &&
          expandedArray.map((item, index) => (
            <Row key={index}>
              <Col>
                <Input
                  value={item.name}
                  placeholder={`category name`}
                  onChange={(e) =>
                    handleCategoryInput(
                      "name",
                      e.target.value,
                      index,
                      "expanded"
                    )
                  }
                />
              </Col>
              <Col>
                <select
                  className="form-control"
                  value={item.parentId}
                  onChange={(e) =>
                    handleCategoryInput(
                      "parentId",
                      e.target.value,
                      index,
                      "expanded"
                    )
                  }
                >
                  <option value="">category</option>
                  {createCategoryList(ListCategory).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </Col>
              <Col>
                <select
                  className="form-control"
                  value={item.type}
                  onChange={(e) =>
                    handleCategoryInput(
                      "type",
                      e.target.value,
                      index,
                      "expanded"
                    )
                  }
                >
                  <option value="">type</option>
                  <option value="store">store</option>
                  {/* <option value="product">product</option> */}
                  <option value="page">page</option>
                </select>
              </Col>
            </Row>
          ))}
      </Modal.Body>
      <Modal.Body>
        <p>Checked</p>
        {checkedArray.length > 0 &&
          checkedArray.map((item, index) => (
            <Row key={index}>
              <Col>
                <Input
                  value={item.name}
                  placeholder={`category name`}
                  onChange={(e) =>
                    handleCategoryInput(
                      "name",
                      e.target.value,
                      index,
                      "checked"
                    )
                  }
                />
              </Col>
              <Col>
                <select
                  className="form-control"
                  value={item.parentId}
                  onChange={(e) =>
                    handleCategoryInput(
                      "parentId",
                      e.target.value,
                      index,
                      "checked"
                    )
                  }
                >
                  <option value="">category</option>
                  {createCategoryList(ListCategory).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </Col>
              <Col>
                <select
                  className="form-control"
                  value={item.type}
                  onChange={(e) =>
                    handleCategoryInput(
                      "type",
                      e.target.value,
                      index,
                      "checked"
                    )
                  }
                >
                  <option value="">type</option>
                  <option value="store">store</option>
                  {/* <option value="product">product</option> */}
                  <option value="page">page</option>
                </select>
              </Col>
            </Row>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleUpdateForm();
          }}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
  const handleUpdateForm = () => {
    const form = new FormData();
    expandedArray.forEach((item, index) => {
      form.append("_id", item.value);
      form.append("name", item.name);
      form.append("parentId", item.parentId ? item.parentId : "");
      form.append("type", item.type);
    });
    checkedArray.forEach((item, index) => {
      form.append("_id", item.value);
      form.append("name", item.name);
      form.append("parentId", item.parentId ? item.parentId : "");
      form.append("type", item.type);
    });
    dispatch(updateCategoryAction(form));
    setShow(false);
  };
  return (
    <div>
      <div className="cover__button">
        <div>
          <FormDialog label="Add category" />
        </div>
        <div className="button__right">
          <Button variant="outlined" color="primary" onClick={handleUpdate}>
            Update Category
          </Button>
          <Button variant="outlined" color="primary" onClick={handleDelete}>
            Delete Category
          </Button>
        </div>
      </div>
      <CheckBoxTree
        nodes={renderCategories(ListCategory)}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={{
          check: <IoIosCheckbox />,
          uncheck: <IoIosCheckboxOutline />,
          halfCheck: <IoIosCheckboxOutline />,
          expandClose: <IoIosArrowForward />,
          expandOpen: <IoIosArrowDown />,
        }}
      />
      {/* <FormEditDialog checked={checked} expanded={expanded} /> */}

      {renderUpdateCategoryModal()}
      {renderDeleteCategoryModal()}
    </div>
  );
}
