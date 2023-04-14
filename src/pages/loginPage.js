import React, { useState } from "react";
import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";
import UsePasswordToggle from "../customHooks.js/usePasswordToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LoginPage = () => {
  const [PasswordInputType, ToggleIcon] = UsePasswordToggle();

  console.log(PasswordInputType, ToggleIcon);

  const [show, setShow] = useState(true);

  return (
    <React.Fragment>
      <div className={styles.hor}>
        <div className={styles["hor-one"]}></div>
        <div className={styles["hor-two"]}>
          <div className={styles["icon-box"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p>
              Back to{" "}
              <Link to="/" className={styles.int}>
                Home
              </Link>
            </p>
          </div>
          <div className={styles.lp}>
            <p className={styles["heading-three"]}>
              Login to your Expanter account
            </p>
            <form>
              <p className={styles.tag}>Fill out the form</p>
              {/* <div>
                <p className={styles.col}>I'm signing up as</p>
                <div className={styles.pogo}>
                  <div>
                    <input
                      type="radio"
                      name="uni"
                      id="Brand"
                      checked="checked"
                    />
                    <label className={styles.nl} for="Brand">
                      Brand
                    </label>
                  </div>
                  <div>
                    <input type="radio" name="uni" id="Service provider" />
                    <label className={styles["nl-two"]} for="Service provider">
                      Service provider
                    </label>
                  </div>
                </div>
              </div> */}
              <div className={styles.jiti}>
                <label>Email address</label>
                <textarea rows="3" className={styles.koko} />
              </div>
              <div className={styles["jiti-two"]}>
                <label>Password</label>
                <div>
                  <textarea rows="3" className={styles.koko} type="password" />
                  {/* {show ? <FontAwesomeIcon icon={"eye"} /> : "o"} */}
                </div>
              </div>
              <Link className={styles.gdg}>Forgot password?</Link>
              <br />
              <div className={styles.xzc}>
                <div className={styles.mbn}>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label for="checkbox">Remember me</label>
                </div>
                <button type="submit" className={styles.ln}>
                  Login now
                </button>
              </div>
            </form>
          </div>
          <hr className={styles["line-two"]} />
          <div className={styles.oi}>
            <Link className={styles.pp}>I dont have an Expanter account</Link>
            <Link to="/create" className={styles["oi-two"]}>
              create account
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
