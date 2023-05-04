import React, { useEffect, useRef, useState } from "react";
import styles from "./createAccount.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import baseUrl from "../../configs/environment";
const CreateAccount = () => {
  const [showPass, setShowPass] = useState(true);
  const [radioMarked, setRadioMarked] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.id === "brand") {
      setRadioMarked("brand");
    } else {
      setRadioMarked("Service provider");
    }
  }, []);

  const onBrandCheckHandler = () => {
    setRadioMarked("brand");
  };

  const onServiceCheckHandler = () => {
    setRadioMarked("Service provider");
  };

  const onChangePassHandler1 = () => {
    setShowPass(false);
  };

  const onChangePassHandler2 = () => {
    setShowPass(true);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    if (
      errors.passwordIndicator === false &&
      errors.emailIndicator === false &&
      errors.firstNameIndicator === false &&
      errors.lastNameIndicator === false &&
      errors.businessNameIndicator === false
    ) {
      const response = await fetch(`${baseUrl}/auth/email/registration/brand`, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (!response.ok) {
        setError("Something went wrong");
        return;
      }

      setSuccess("Your account is created");
    }
  };

  const errors = {};
  const validate = (values) => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (
      !values.firstName ||
      values.firstName.includes("-") ||
      values.firstName.includes("_")
    ) {
      errors.firstName = "Please enter correct firstName";
      errors.firstNameIndicator = true;
    } else {
      errors.firstNameIndicator = false;
    }
    if (
      !values.lastName ||
      values.lastName.includes("-") ||
      values.lastName.includes("_")
    ) {
      errors.lastName = "Please enter correct lastName";
      errors.lastNameIndicator = true;
    } else {
      errors.lastNameIndicator = false;
    }
    if (
      !values.businessName ||
      values.businessName.includes("-") ||
      values.businessName.includes("_")
    ) {
      errors.businessName = "Please enter correct businessName";
      errors.businessNameIndicator = true;
    } else {
      errors.businessNameIndicator = false;
    }
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

  if (error) {
    return <p className={styles["error-text"]}>{error}</p>;
  }

  if (success) {
    return <p className={styles["success-text"]}>{success}</p>;
  }

  return (
    <React.Fragment>
      <div className={styles["signup-container"]}>
        <div className={styles["signup-container-one"]}></div>
        <div className={styles["signup-container-two"]}>
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
              <Link to="/" className={styles.lnk}>
                Home
              </Link>
            </p>
          </div>
          <div className={styles["form-container"]}>
            <p className={styles["heading-primary"]}>Create an account</p>
            <form onSubmit={submitHandler}>
              <p className={styles["form-text"]}>Fill out the form</p>
              <div className={styles["radio-container"]}>
                <p className={styles["radio-text"]}>I'm signing up as</p>
                <div className={styles["radio-box"]}>
                  <div>
                    <input
                      type="radio"
                      name="uni"
                      id="Brand"
                      checked={radioMarked === "brand"}
                      value="Brand"
                      onChange={onBrandCheckHandler}
                    />
                    <label className={styles["form-label-one"]} for="Brand">
                      Brand
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="uni"
                      id="Service provider"
                      checked={radioMarked === "Service provider"}
                      value="Service provider"
                      onChange={onServiceCheckHandler}
                    />
                    <label
                      className={styles["form-label-two"]}
                      for="Service provider"
                    >
                      Service provider
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles["input-group"]}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  className={`${styles["input-box"]} ${
                    formErrors.firstNameIndicator
                      ? styles["input-indicator"]
                      : ""
                  } `}
                  onChange={onChangeHandler}
                />
              </div>
              <p className={styles["text-indicator"]}>{formErrors.firstName}</p>
              <div className={styles["input-group"]}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`${styles["input-box"]} ${
                    formErrors.lastNameIndicator
                      ? styles["input-indicator"]
                      : ""
                  }`}
                  onChange={onChangeHandler}
                />
              </div>
              <p className={styles["text-indicator"]}>{formErrors.lastName}</p>
              <div className={styles["input-group"]}>
                <label>Email address</label>
                <input
                  type="text"
                  name="email"
                  className={`${styles["input-box"]} ${
                    formErrors.emailIndicator ? styles["input-indicator"] : ""
                  }`}
                  onChange={onChangeHandler}
                />
              </div>
              <p className={styles["text-indicator"]}>{formErrors.email}</p>
              <div className={styles["input-group"]}>
                <label>Password</label>
                <div>
                  <input
                    name="password"
                    className={`${styles["input-box"]} ${
                      formErrors.passwordIndicator
                        ? styles["input-indicator"]
                        : ""
                    }`}
                    type={showPass ? "text" : "password"}
                    onChange={onChangeHandler}
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
                </div>
              </div>
              <p className={styles["text-indicator"]}>{formErrors.password}</p>

              <div className={styles["input-group"]}>
                <label>Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  className={`${styles["input-box"]} ${
                    formErrors.businessNameIndicator
                      ? styles["input-indicator"]
                      : ""
                  } `}
                  onChange={onChangeHandler}
                />
              </div>
              <p className={styles["text-indicator"]}>
                {formErrors.businessName}
              </p>

              <button type="submit" className={styles["btn-one"]}>
                Create account now
              </button>
            </form>
          </div>
          <hr className={styles["horizontal-line"]} />
          <div className={styles["ques-group"]}>
            <Link className={styles["ques-text"]}>
              Already have an Expanter account?
            </Link>
            <Link to="/login" className={styles["btn-two"]}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateAccount;
