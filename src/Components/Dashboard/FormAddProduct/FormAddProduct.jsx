import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../Redux/Actions/Product";
import InputField from "../InputField";
import SelectField from "../SelectField/SelectField";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.25),
    marginBottom: theme.spacing(2),
  },
}));

export default function FormAddProduct() {
  const [reload, setReload] = useState(false);
  const { loading, error } = useSelector((state) => state.CategoryReducer);
  const [Image, setImage] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name !!! 😅 😅 😅"),
    quantity: yup.number().required("Please enter your quantity !!! 😅 😅 😅"),
    price: yup.number().required("Please enter your price !!! 😅 😅 😅"),
    description: yup
      .string()
      .required("Please enter your description !!! 😅 😅 😅"),
    // categoryImage: yup.string(),
  });
  const form = useForm({
    defaultValues: {
      name: "",
      quantity: "",
      price: "",
      description: "",
      category: "",
      productPicture: "",
    },
    resolver: yupResolver(schema),
  });

  const handleChange = (e) => {
    setImage([...Image, e.target.files[0]]);
  };
  const handleSubmit = async (values) => {
    var formDataProduct = new FormData();
    formDataProduct.append("name", values.name);
    formDataProduct.append("price", values.price);
    formDataProduct.append("quantity", values.quantity);
    formDataProduct.append("description", values.description);
    formDataProduct.append("category", values.category);
    for (let pic of Image) {
      formDataProduct.append("productPicture", pic);
    }
    await dispatch(createProductAction(formDataProduct));
    setReload(!reload);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {loading && <LinearProgress />}
      <InputField fullWidth name="name" label="Product name" form={form} />
      <InputField fullWidth name="quantity" label="quantity" form={form} />
      <InputField fullWidth name="price" label="price" form={form} />
      <InputField
        fullWidth
        name="description"
        label="description"
        form={form}
      />
      <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
      <SelectField fullWidth name="category" label="category" form={form} />
      {Image.length > 0
        ? Image.map((picture, index) => <div key={index}>{picture.name}</div>)
        : null}
      <input
        id="contained-button-file"
        multiple
        type="file"
        name="upload-photo"
        onChange={handleChange}
      />
      <Button
        type="submit"
        className={classes.submit}
        fullWidth
        variant="contained"
        color="primary"
        // disabled={loading}
      >
        Add Product
      </Button>
    </form>
  );
}
