/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { loginAction } from "../../../Redux/Actions/auth";
import InputField from "../InputField";
import PasswordField from "../PasswordField";

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
    password: yup.string().required("Please enter your password !!! 😅 😅 😅"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    await dispatch(loginAction(values));
  };


  const { UserInfor, loading, error } = useSelector((state) => state.Auth);

  const { enqueueSnackbar } = useSnackbar();
  const handleShownotistackError = (message) => {
    enqueueSnackbar(message, { variant: "error" });
  };
  const handleShownotistackSuccess = (message) => {
    enqueueSnackbar(message, { variant: "success" });
  };
  const classes = useStyles();
  // useEffect(() => {
  //   if (error?.email) {
  //     handleShownotistackError(error.email);
  //   }
  //   if (error?.message) {
  //     handleShownotistackError(error.message);
  //   }
  //   if (UserInfor) {
  //     handleShownotistackSuccess("login successfully");
  //   }
  // }, [error, UserInfor]);
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {loading && <LinearProgress />}
      <InputField fullWidth name="email" label="email message" form={form} />
      <PasswordField fullWidth name="password" label="Password" form={form} />
      <Button
        type="submit"
        className={classes.submit}
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
      >
        Sign In
      </Button>
    </form>
  );
}
