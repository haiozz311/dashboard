/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as yup from "yup";
import { loginAction } from "../../Redux/Actions/auth";
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
  const handleSubmit = async (values) => {
    await dispatch(loginAction(values));
  };

  const { loading, error } = useSelector((state) => state.Auth);
  const UserInfor = JSON.parse(localStorage.getItem("UserInfor"));
  console.log("UserInfor", UserInfor);

  const { enqueueSnackbar } = useSnackbar();
  // const handleShownotistack = () => {
  //   enqueueSnackbar("Login successfully", { variant: "success" });
  // };
  const handleShownotistackError = (message) => {
    enqueueSnackbar(message, { variant: "error" });
  };
  const handleLogoutSnackbar = () => {
    enqueueSnackbar("Logout successfully", { variant: "success" });
  };
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if (UserInfor === null) {
      handleLogoutSnackbar();
      history.push("/login");
    }
  }, [UserInfor]);
  useEffect(() => {
    if (error?.email) {
      handleShownotistackError(error.email);
    }
    if (error?.message) {
      handleShownotistackError(error.message);
    }
  }, [error]);
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {loading && <LinearProgress />}
      <InputField fullWidth name="email" label="email message" form={form} />
      <PasswordField fullWidth name="passWord" label="Password" form={form} />
      {/* <Progress /> */}
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
