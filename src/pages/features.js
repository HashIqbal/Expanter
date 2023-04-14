import React from "react";
import { Link } from "react-router-dom";
import styles from "./features.module.css";

const FeaturesPage = () => {
  return (
    <React.Fragment>
      <section className={styles.box}>
        <div className={styles.go}>
          <p className={styles.jito}>
            &#60; Back to{" "}
            <Link to="/" className={styles["jito-two"]}>
              Home
            </Link>
          </p>
          <div className={styles.pos}>
            <div className={styles.coco}>
              <h2 className={styles["heading-two"]}>
                Our bussiness wants to expand to china
              </h2>
            </div>
            <hr className={styles.line} />
            <div>
              <div>
                <p className={styles.jo}>Unlock china</p>
                <p className={styles.ul}>
                  Simplify China expansion with a self-serviced digital platform
                </p>
              </div>
              <div>
                <p className={styles.jo}>Unlock Resources</p>
                <p className={styles.ul}>
                  Custom-sourced bussiness solutions that match your needs
                </p>
              </div>
              <div>
                <p className={styles.jo}>Streamline expansion</p>
                <p className={styles.ul}>
                  B2B transaction and multi-expansion management, automated in
                  one digital workspace
                </p>
              </div>
            </div>
            <div className={styles.fo}>
              <Link className={styles.vito} to="/create/product1">
                Signup
              </Link>
              <Link className={styles["vito-two"]}>Login</Link>
            </div>
          </div>
        </div>
        <div className={styles.vo}>
          <div className={styles["pos-two"]}>
            <h2 className={styles["heading-two"]}>
              I provide services in China for business from overseas
            </h2>
            <hr className={styles["line-two"]} />
            <div>
              <div>
                <p className={styles.jo}>Unlock visibility</p>
                <p className={styles.ul}>
                  Connect with global clients who are ready to expand to china
                </p>
              </div>
              <div>
                <p className={styles.jo}>Filtered Opportunities</p>
                <p className={styles.ul}>
                  Pitching only to find out not matching ? let expanter filter
                  for you
                </p>
              </div>
              <div>
                <p className={styles.jo}>Streamline client servicing</p>
                <p className={styles.ul}>
                  B2B transaction and multi-expansion management, automated in
                  one digital workspace
                </p>
              </div>
            </div>
            <div className={styles.fo}>
              <Link className={styles.chito} to="/create/product2">
                Signup
              </Link>
              <Link className={styles["chito-two"]}>Login</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeaturesPage;
