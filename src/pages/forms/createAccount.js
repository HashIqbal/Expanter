import React, { useEffect, useRef, useState } from "react";
import styles from "./createAccount.module.css";
import { Link } from "react-router-dom";
// import UsePasswordToggle from "../customHooks/usePasswordToggle";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
const CreateAccount = () => {
  const inputData1 = useRef();
  const inputData2 = useRef();
  // const inputData3 = useRef();
  // const inputData4 = useRef();
  const inputData5 = useRef();
  const inputData6 = useRef();
  const inputData7 = useRef();
  // const [PasswordInputType, ToggleIcon] = UsePasswordToggle();

  // console.log(PasswordInputType, ToggleIcon);

  const [showEye, setShowEye] = useState(true);
  const [showPass, setShowPass] = useState(true);
  const [radioMarked, setRadioMarked] = useState(false);
  const [randomVal1, setRandomVal1] = useState(true);
  const [randomVal2, setRandomVal2] = useState(true);
  const [emailVal, setEmailVal] = useState(false);
  const [passVal, setPassVal] = useState();
  // const [ag, setAg] = useState(false);
  // const [jj, setJj] = useState(false);

  // const [ol, setOl] = useState(false);
  // const [bz, setBz] = useState(false);
  const [firstNameVal, setFirstNameVal] = useState(false);
  const [lastNameVal, setLastNameVal] = useState(false);
  const [bussNameVal, setBussNameVal] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (params.id === "brand") {
      setRadioMarked(true);
      // setOl(true);
    } else {
      setRadioMarked(false);
      // setBz(true);
    }
  }, []);

  const onHil = () => {
    setRadioMarked(true);
    // setOl(true);
    // setBz(false);
    setRandomVal1(true);
    setRandomVal2(false);
  };

  const onBil = () => {
    setRadioMarked(false);
    // setBz(true);
    // setOl(false);

    setRandomVal1(false);
    setRandomVal2(true);
  };

  const onEy = () => {
    setShowEye(false);
    setShowPass(false);
  };

  const onFy = () => {
    setShowEye(true);
    setShowPass(true);
  };

  const sumtHandler = (e) => {
    e.preventDefault();

    if (
      inputData5.current.value.includes("_") ||
      inputData5.current.value.includes("-") ||
      inputData5.current.value.length < 1
    ) {
      setFirstNameVal(true);
    } else {
      setFirstNameVal(false);
    }

    if (
      inputData6.current.value.includes("_") ||
      inputData6.current.value.includes("-") ||
      inputData6.current.value.length < 1
    ) {
      setLastNameVal(true);
    } else {
      setLastNameVal(false);
    }

    if (
      inputData7.current.value.includes("_") ||
      inputData7.current.value.includes("-") ||
      inputData7.current.value.length < 1
    ) {
      setBussNameVal(true);
    } else {
      setBussNameVal(false);
    }

    if (
      !inputData1.current.value.includes("@") &&
      !inputData1.current.value.includes(".com")
    ) {
      setEmailVal(true);
      // console.log("jo");
    } else {
      setEmailVal(false);
    }

    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!regExp.test(inputData2.current.value)) {
      console.log("hey");
      setPassVal(true);
    } else {
      setPassVal(false);
    }
  };

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
            <form onSubmit={sumtHandler}>
              <p className={styles["form-text"]}>Fill out the form</p>
              <div className={styles["radio-container"]}>
                <p className={styles["radio-text"]}>I'm signing up as</p>
                <div className={styles["radio-box"]}>
                  <div>
                    <input
                      type="radio"
                      name="uni"
                      id="Brand"
                      checked={radioMarked ? randomVal1 : null}
                      // checked="checked"
                      onClick={onHil}
                      value="Brand"
                      // onChange={(e) => setRdo(e.target.value)}
                      // ref={inputData1}
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
                      checked={!radioMarked ? randomVal2 : null}
                      onClick={onBil}
                      value="Service provider"
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
                  ref={inputData5}
                  className={`${styles["input-box"]} ${
                    firstNameVal ? styles["input-indicator"] : ""
                  }`}
                />
                {firstNameVal && (
                  <p className={styles["error-message"]}>
                    Please enter correct Name
                  </p>
                )}
              </div>
              <div className={styles["input-group"]}>
                <label>Last Name</label>
                <input
                  ref={inputData6}
                  className={`${styles["input-box"]} ${
                    lastNameVal ? styles["input-indicator"] : ""
                  }`}
                />
                {lastNameVal && (
                  <p className={styles["error-message"]}>
                    Please enter correct last-Name
                  </p>
                )}
              </div>
              <div className={styles["input-group"]}>
                <label>Email address</label>
                <input
                  ref={inputData1}
                  className={`${styles["input-box"]} ${
                    emailVal ? styles["input-indicator"] : ""
                  }`}
                />
                {emailVal && (
                  <p className={styles["error-message"]}>
                    Please enter correct E-mail
                  </p>
                )}
              </div>
              <div className={styles["input-group"]}>
                <label>Password</label>
                <div>
                  <input
                    className={`${styles["input-box"]} ${
                      passVal ? styles["input-indicator"] : ""
                    }`}
                    type={showPass ? "text" : "password"}
                    ref={inputData2}
                  />
                  {/* <FontAwesomeIcon icon={"eye"} /> */}
                  {showEye ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={styles["eye-icon"]}
                      onClick={onEy}
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
                      onClick={onFy}
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
                {passVal && (
                  <p className={styles["error-message"]}>
                    Please enter correct password
                  </p>
                )}
              </div>

              <div className={styles["input-group"]}>
                <label>Business Name</label>
                <input
                  ref={inputData7}
                  className={`${styles["input-box"]} ${
                    bussNameVal ? styles["input-indicator"] : ""
                  }`}
                />
                {bussNameVal && (
                  <p className={styles["error-message"]}>
                    Please enter correct Business-Name
                  </p>
                )}
              </div>

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
            <Link to="/create/i" className={styles["btn-two"]}>
              Create account
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateAccount;
