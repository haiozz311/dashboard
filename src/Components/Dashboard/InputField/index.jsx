import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

export default function InputField(props) {
  const { name, form, label, value } = props;
  const { errors, formState } = form;
  const hasErr = formState.touched[name] && errors[name];
  return (
    <Controller
      required={true}
      defaultValue={value}
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="normal"
      fullWidth
      autoFocus
      label={label}
      error={!!hasErr}
      helperText={errors[name]?.message}
    />
  );
}
