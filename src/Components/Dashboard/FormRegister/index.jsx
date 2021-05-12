/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router";
import * as yup from "yup";
import { registerAction } from "../../../Redux/Actions/auth";
import InputField from "../InputField";
import PasswordField from "../PasswordField";
import { useHistory } from "react-router-dom";
import { clearRegisterAction } from "../../../Redux/Actions/auth";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.25),
    marginBottom: theme.spacing(1),
  },
}));

export default function FormRegister() {
  const history = useHistory();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Please enter your email !!! 😅 😅 😅"),
    password: yup.string().required("Please enter your password !!! 😅 😅 😅"),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    fullName: yup.string().required("Please enter your fullname !!! 😅 😅 😅"),
    phoneNumber: yup
      .string()
      .length(10)
      .required("Please enter your phone number !!! 😅 😅 😅")
      .matches(phoneRegExp, "Phone number is not valid"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      fullName: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { userRegister, loading, error } = useSelector(
    (state) => state.userRegister
  );
  const handleSubmit = async (values) => {
    await dispatch(registerAction(values));
    // if (userRegister) {
    //   history.push("/login");
    // }
  };

  const { enqueueSnackbar } = useSnackbar();
  const handleShownotistacksuccessfull = (message) => {
    enqueueSnackbar(message, { variant: "success" });
  };
  const handleShownotistackError = (message) => {
    enqueueSnackbar(message, { variant: "error" });
  };
  const classes = useStyles();
  useEffect(() => {
    if (error?.email) {
      handleShownotistackError(error.email);
    }
    if (error?.password) {
      handleShownotistackError(error.password);
    }
    if (error?.password2) {
      handleShownotistackError(error.password2);
    }
    if (error?.fullName) {
      handleShownotistackError(error.fullName);
    }
    if (error?.phoneNumber) {
      handleShownotistackError(error.phoneNumber);
    }
    if (error?.message) {
      handleShownotistackError(error.message);
    }
  }, [error]);
  useEffect(() => {
    if (userRegister) {
      // handleShownotistacksuccessfull("Register successfully");
      // const timer = setTimeout(() => {
      //   dispatch(clearRegisterAction());
      // }, 3000);

      // history.push("/login");
    }
  }, [userRegister]);
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {loading && <LinearProgress />}
      <InputField forcus fullWidth name="email" label="email" form={form} />
      <InputField fullWidth name="fullName" label="full Name" form={form} />
      <InputField
        fullWidth
        name="phoneNumber"
        label="phone Number"
        form={form}
      />
      <PasswordField fullWidth name="password" label="Password" form={form} />
      <PasswordField
        fullWidth
        name="password2"
        label="Comfirm Password"
        form={form}
      />
      {/* <Progress /> */}
      <Button
        type="submit"
        className={classes.submit}
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
      >
        Register
      </Button>
      <div className="text-center mt-4 font-weight-light">
        Already have an account?
        <NavLink to="/login" className="text-primary">
          Login
        </NavLink>
      </div>
    </form>
  );
}
