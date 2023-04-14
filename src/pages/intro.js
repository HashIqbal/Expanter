import React from "react";
import { Link } from "react-router-dom";
import styles from "./intro.module.css";

const IntroPage = () => {
  return (
    <React.Fragment>
      <header className={styles.container}>
        <div className={styles.it}>
          <div>logo</div>
          <nav className={styles["it-two"]}>
            <Link className={styles.fro}>Home</Link>
            <Link className={styles.fro}>About</Link>
            <Link className={styles.fro}>Platform</Link>
            <Link className={styles.fro}>Investor</Link>
            <Link className={styles.fro}>Sign up </Link>
          </nav>
        </div>
        <div className={styles["cont-two"]}>
          <div className={styles.adjust}>
            <h1 className={styles.heading}>
              Global expansion made smart and simple
            </h1>
            <p className={styles.para}>
              Expanter digitises new market expansion process, and makes
              bussiness resources accessible for all companies and
              professionals.Plan, connect and work across borders, all on one
              digital platform powered by Expanter.
            </p>
            <Link className={styles.pre}>Sign up to learn more</Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default IntroPage;
