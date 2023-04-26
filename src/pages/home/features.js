import React from "react";
import { Link } from "react-router-dom";
import styles from "./features.module.css";

const FeaturesPage = () => {
  return (
    <React.Fragment>
      <section className={styles["features-container"]}>
        <div className={styles["features-container-brand"]}>
          <p className={styles["link-group"]}>
            &#60; Back to{" "}
            <Link to="/" className={styles["link-tag"]}>
              Home
            </Link>
          </p>
          <div className={styles["main-body-brand"]}>
            <div className={styles["heading-group"]}>
              <h2 className={styles["heading-primary"]}>
                Our bussiness wants to expand to china
              </h2>
            </div>
            <hr className={styles["line-small-brand"]} />
            <div>
              <div>
                <p className={styles["heading-secondary"]}>Unlock china</p>
                <p className={styles["list-item"]}>
                  Simplify China expansion with a self-serviced digital platform
                </p>
              </div>
              <div>
                <p className={styles["heading-secondary"]}>Unlock Resources</p>
                <p className={styles["list-item"]}>
                  Custom-sourced bussiness solutions that match your needs
                </p>
              </div>
              <div>
                <p className={styles["heading-secondary"]}>
                  Streamline expansion
                </p>
                <p className={styles["list-item"]}>
                  B2B transaction and multi-expansion management, automated in
                  one digital workspace
                </p>
              </div>
            </div>
            <div className={styles["link-box"]}>
              <Link className={styles["link-tag-signup"]} to="/create/brand">
                Signup
              </Link>
              <Link className={styles["link-tag-login"]}>Login</Link>
            </div>
          </div>
        </div>
        <div className={styles["features-container-services"]}>
          <div className={styles["main-body-services"]}>
            <h2 className={styles["heading-primary"]}>
              I provide services in China for business from overseas
            </h2>
            <hr className={styles["line-small-services"]} />
            <div>
              <div>
                <p className={styles["heading-secondary"]}>Unlock visibility</p>
                <p className={styles["list-item"]}>
                  Connect with global clients who are ready to expand to china
                </p>
              </div>
              <div>
                <p className={styles["heading-secondary"]}>
                  Filtered Opportunities
                </p>
                <p className={styles["list-item"]}>
                  Pitching only to find out not matching ? let expanter filter
                  for you
                </p>
              </div>
              <div>
                <p className={styles["heading-secondary"]}>
                  Streamline client servicing
                </p>
                <p className={styles["list-item"]}>
                  B2B transaction and multi-expansion management, automated in
                  one digital workspace
                </p>
              </div>
            </div>
            <div className={styles["link-box"]}>
              <Link className={styles["link-tag-signup"]} to="/create/services">
                Signup
              </Link>
              <Link className={styles["link-tag-login"]}>Login</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeaturesPage;
