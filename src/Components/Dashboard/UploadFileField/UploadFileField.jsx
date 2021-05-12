import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";

export default function UploadFileField(props) {
  const { name, form, label, type } = props;
  const { errors, formState } = form;
  const hasErr = formState.touched[name] && errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      type={type}
      // margin="normal"
      fullWidth
      autoFocus
      label={label}
      error={!!hasErr}
      helperText={errors[name]?.message}
    />
  );
}
