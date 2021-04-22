import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import { Controller } from "react-hook-form";


export default function PasswordField(props) {
  const { name, form, label } = props;
  const { errors, formState } = form;
  const [showPassword, setShowPassword] = useState(false);
  const hasErr = formState.touched[name] && errors[name];

  const toggleShowPassword = () => {
    setShowPassword((state) => !state);
  };
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        as={OutlinedInput}
        id={name}
        label={label}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="my-helper-text" error={!!hasErr}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}
