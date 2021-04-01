import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordField from "../PasswordField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/Actions/auth";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.25),
    marginBottom: theme.spacing(2),
  },
}));

export default function FormLogin() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Please enter your email !!! 😅 😅 😅"),
    passWord: yup.string().required("Please enter your password !!! 😅 😅 😅"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      passWord: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("data form", values);
    dispatch(loginAction(values));
  };

  const classes = useStyles();
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField fullWidth name="email" label="email message" form={form} />
      <PasswordField fullWidth name="passWord" label="Password" form={form} />
      <Button
        type="submit"
        className={classes.submit}
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </form>
  );
}
