import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Input";
import { createPageAction } from "../../../Redux/Actions/page";
import { getAllCategoryAction } from "../../../Redux/Actions/Category";

export default function Page() {
  const dispatch = useDispatch();
  const [createModal, setCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [desc, setDesc] = useState("");
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("");
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
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);
  const { ListCategory } = useSelector((state) => state.CategoryReducer);
  useEffect(() => {
    setCategories(createCategoryList(ListCategory));
  }, [ListCategory]);
  const handleOpenModal = () => {
    setCreateModal(true);
  };
  const handleClose = () => {
    setCreateModal(false);
  };

  const handleBannerImages = (e) => {
    console.log(e);
    setBanners([...banners, e.target.files[0]]);
  };
  const handleProductImages = (e) => {
    console.log(e);
    setProducts([...products, e.target.files[0]]);
  };

  const submitPageForm = (e) => {
    // e.target.preventDefault();
    if (title === "") {
      alert("Title is required");
      setCreateModal(false);
      return;
    }
    const form = new FormData();
    form.append("title", title);
    form.append("description", desc);
    form.append("category", categoryId);
    form.append("type", type);
    banners.forEach((banner, index) => {
      form.append("banners", banner);
    });
    products.forEach((product, index) => {
      form.append("products", product);
    });
    dispatch(createPageAction(form));
    console.log("total", { title, desc, categoryId, type, banners, products });
  };
  const onCategoryChange = (e) => {
    const category = categories.find(
      (category) => category.value === e.target.value
    );
    setCategoryId(e.target.value);
    console.log("category", category);
    setType(category?.type);
  };
  const renderCreatePageModal = () => (
    <Modal show={createModal} handleClose={handleClose} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Page</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <select
              className="form-control form-control-sm"
              value={categoryId}
              onChange={onCategoryChange}
            >
              <option value="">Select category</option>
              {categories.map((cate) => (
                <option key={cate._id} value={cate.value}>
                  {cate.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Page Title "}
              className="form-control"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder={"Page Desc"}
              className="form-control"
            />
          </Col>
        </Row>
        {banners.length > 0
          ? banners.map((banner, index) => (
              <Row key={index}>
                <Col>{banner.name}</Col>
              </Row>
            ))
          : null}
        <Row>
          <Col>
            <Input
              className="form-control form-control-sm"
              type="file"
              name="banners"
              onChange={handleBannerImages}
            />
          </Col>
        </Row>
        {products.length > 0
          ? products.map((product, index) => (
              <Row key={index}>
                <Col>{product.name}</Col>
              </Row>
            ))
          : null}
        <Row>
          <Col>
            <Input
              className="form-control form-control-sm"
              type="file"
              name="products"
              onChange={handleProductImages}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            submitPageForm();
          }}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleOpenModal()}
      >
        Create Page
      </Button>
      {renderCreatePageModal()}
    </div>
  );
}
