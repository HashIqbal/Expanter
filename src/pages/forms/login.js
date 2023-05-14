import React from "react";
import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import baseUrl from "../../configs/environment";
import useHttp from "../../HTTP/errorResponse";
import { ReactFromModule } from "mymodule";

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [showPass, setShowPass] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [errorFourHund, setErrorFourHund] = useState();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onChangePassHandler1 = () => {
    setShowPass(false);
  };
  const onChangePassHandler2 = () => {
    setShowPass(true);
  };

  const useSubmitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    // const { fetchData } = useHttp();
    if (errors.emailIndicator === false && errors.passwordIndicator === false) {
      console.log("hi");
      console.log(React === ReactFromModule); //false

      // fetchData(formValues, "POST", "auth/email/login");
      // const response = await fetch(`${baseUrl}/auth/email/login`, {
      //   method: "POST",
      //   body: JSON.stringify(formValues),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // console.log(response);
      // if (response.status === 400) {
      //   setError("something went wrong");
      //   return;
      // }
      // setSuccess("You are logged in");
      // // setErrorFourHund(error400);
      // console.log(errorFourHund);
    }
  };

  const errors = {};
  const validate = (values) => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!regExp.test(values.password)) {
      errors.password = "Please enter correct password";
      errors.passwordIndicator = true;
    } else {
      errors.passwordIndicator = false;
    }
    if (
      !values.email ||
      !values.email.includes("@") ||
      !values.email.includes(".com")
    ) {
      errors.email = "Please enter correct email";
      errors.emailIndicator = true;
    } else {
      errors.emailIndicator = false;
    }

    return errors;
  };

  // if (errorFourHund) {
  // return <p className={styles["error-text"]}>{errorFourHund}</p>;
  // }

  if (success) {
    return <p className={styles["success-text"]}>{success}</p>;
  }

  return (
    <React.Fragment>
      <div className={styles["login-container"]}>
        <div className={styles["login-container-img"]}></div>
        <div className={styles["login-container-form"]}>
          <div className={styles["icon-box"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={styles["icon-chev"]}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p>
              Back to{" "}
              <Link to="/" className={styles.tag}>
                Home
              </Link>
            </p>
          </div>
          <div className={styles["form-container"]}>
            <h1 className={styles["heading-primary"]}>
              Log in to your Expanter account
            </h1>
            <p className={styles["form-text"]}>Fill out the form</p>
            <form onSubmit={useSubmitHandler}>
              <div className={styles["input-group"]}>
                <label>Work email</label>
                <input
                  className={`${styles["input-box"]} ${
                    formErrors.emailIndicator
                      ? styles["input-box-indicator"]
                      : ""
                  }`}
                  onChange={onChangeHandler}
                  name="email"
                  type="text"
                />
                <p className={styles["text-indicator"]}>{formErrors.email}</p>
              </div>
              <div className={styles["input-group"]}>
                <label>Password</label>
                <div>
                  <input
                    className={`${styles["input-box"]} ${
                      formErrors.passwordIndicator
                        ? styles["input-box-indicator"]
                        : ""
                    }`}
                    onChange={onChangeHandler}
                    name="password"
                    type={showPass ? "text" : "password"}
                  />
                  {showPass ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={styles["eye-icon"]}
                      onClick={onChangePassHandler1}
                    >
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path
                        fill-rule="evenodd"
                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={styles["eye-icon-cross"]}
                      onClick={onChangePassHandler2}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                        clip-rule="evenodd"
                      />
                      <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                    </svg>
                  )}
                  <p className={styles["text-indicator"]}>
                    {formErrors.password}
                  </p>
                </div>
              </div>
              <Link className={styles["ques-text"]}>Forgot Password?</Link>
              <div className={styles["btn-box"]}>
                <div className={styles["checkbox-box"]}>
                  <input className={styles["input-checkbox"]} type="checkbox" />
                  <label>Remember me</label>
                </div>
                <button type="submit" className={styles["btn-login"]}>
                  Login
                </button>
              </div>
            </form>
          </div>
          <hr className={styles["horizontal-line"]} />
          <div className={styles["create-account-box"]}>
            <Link className={styles["ques-create-account"]}>
              I dont have an Expanter account ?
            </Link>
            <Link className={styles["btn-create-account"]} to="/create/i">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
