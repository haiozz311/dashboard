import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../../Redux/Actions/Category";
import InputField from "../InputField";
import SelectField from "../SelectField/SelectField";
import InputLabel from "@material-ui/core/InputLabel";
import UploadFileField from "../UploadFileField/UploadFileField";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.25),
    marginBottom: theme.spacing(2),
  },
}));

export default function FromAddCategory({ handeleValue, handleClose }) {
  const [reload, setReload] = useState(false);
  const { loading, error } = useSelector((state) => state.CategoryReducer);
  const [Image, setImage] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name !!! 😅 😅 😅"),
    parentId: yup.string(),
    // categoryImage: yup.string(),
  });
  const form = useForm({
    defaultValues: {
      name: "",
      parentId: "",
      categoryImage: "",
    },
    resolver: yupResolver(schema),
  });

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("parentId", values.parentId);
    formData.append("categoryImage", Image);
    await dispatch(createCategoryAction(formData));
    handeleValue(true);
    handleClose(true);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {loading && <LinearProgress />}
      <InputField fullWidth name="name" label="Category name" form={form} />
      <InputLabel fullWidth id="demo-simple-select-label">
        Select Category
      </InputLabel>
      <SelectField fullWidth name="parentId" label="Category" form={form} />
      <TextField
        fullWidth
        onChange={handleChange}
        name="upload-photo"
        type="file"
      />
      <Button
        type="submit"
        className={classes.submit}
        fullWidth
        variant="contained"
        color="primary"
        // disabled={loading}
      >
        Add Category
      </Button>
    </form>
  );
}
