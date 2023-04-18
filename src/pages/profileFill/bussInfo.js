import React, { useState } from "react";
import styles from "./bussInfo.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
const BussInfo = () => {
  const [count, setCount] = useState(80);
  const [li, setli] = useState(80);
  const [active, setActive] = useState(false);
  const [net, setNet] = useState("choose options");
  const [cool, setCool] = useState(false);
  const [nm, setNm] = useState("choose options");
  const [pull, setPull] = useState(false);
  const [fil, setFil] = useState("choose options");
  const [fre, setFre] = useState(false);
  const [va, setVa] = useState("choose options");
  const [show, setShow] = useState(false);
  const [qq, setqq] = useState("Choose options");
  const [ro, setRo] = useState([]);
  const [pl, setPl] = useState([]);
  const [sw, setSw] = useState([]);

  const options = ["Metal", "Construction", "Information & Technology"];

  const enteredName = useRef();
  const enteredName2 = useRef();
  const enteredName3 = useRef();

  const countMeasure = (e) => {
    const cool = e.target.value.length;
    // console.log(cool);
    const left = count - cool;
    console.log(left);
    setli(left);
  };

  const choose = () => {
    setActive((show) => {
      return !show;
    });
  };

  const phoose = () => {
    setCool((show) => {
      return !show;
    });
  };

  const lhoose = () => {
    setPull((show) => {
      return !show;
    });
  };

  const mhoose = () => {
    setFre((show) => {
      return !show;
    });
  };

  const qhoose = () => {
    setShow((show) => {
      return !show;
    });
  };

  const newMethod = (e) => {
    console.log(enteredName.current.value);
    setRo((pro) => {
      return [...pro, enteredName.current.value];
    });
  };

  const deleteLng = (removeIndex) => {
    console.log("hi");
    // console.log(e.target);
    const jj = ro.filter((ml, index) => index !== removeIndex);
    setRo(jj);
  };

  const newMethod2 = (e) => {
    console.log(enteredName2.current.value);
    setPl((pro) => {
      return [...pro, enteredName2.current.value];
    });
  };

  const deleteLng2 = (removeIndex) => {
    console.log("hi");
    // console.log(e.target);
    const jj = pl.filter((ml, index) => index !== removeIndex);
    setPl(jj);
  };

  const newMethod3 = (e) => {
    console.log(enteredName3.current.value);
    setSw((pro) => {
      return [...pro, enteredName3.current.value];
    });
  };

  const deleteLng3 = (removeIndex) => {
    console.log("hi");
    // console.log(e.target);
    const jj = sw.filter((ml, index) => index !== removeIndex);
    setSw(jj);
  };

  const calFun = () => {
    console.log("hi");
  };

  return (
    <React.Fragment>
      {/* <input maxLength="10" onChange={countMeasure} /> */}
      {/* <p>{li}</p> */}

      <div className={styles.bu}>
        <div className={styles.one}>
          <div className={styles.ncn}>
            <Link className={styles.lin}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.icon5}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <p className={styles.yoy}>Back</p>
            </Link>
            <h1 className={styles.dsd}>
              Fill up your <span className={styles.lop}>bussiness profile</span>
            </h1>
            <p className={styles.xmx}>
              Helps us offer better experience for you by filling up your
              bussiness profile. You can always change these later.
            </p>
            <div>
              <ul>
                <li className={styles.oio}>
                  <span className={styles.kik}>1</span>
                  Bussiness information
                </li>
                <li className={styles.frf}>
                  <span className={styles.juj}>2</span>
                  Expansion details
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.move}>
            <p className={styles.upp}>
              Fields with asterish(<span className={styles.fro}>*</span>) are
              required
            </p>

            <h2 className={styles.col}>Business information</h2>
            <form onSubmit={calFun}>
              <div className={styles.cr}>
                <label for="Business name">
                  Business name <span className={styles.fro}>*</span>
                </label>
                <input
                  name="Business name"
                  type="text"
                  id="Business name"
                  required
                  className={styles.ol}
                />
              </div>
              <div className={styles.pr}>
                <div className={styles.jo}>
                  <label>Bussiness description or Tagline</label>
                  <span className={styles.nl}>{li} characters left</span>
                </div>
                <textarea
                  maxLength="80"
                  rows="5"
                  className={styles["ol-two"]}
                  onChange={countMeasure}
                ></textarea>
              </div>
              <div className={styles.en}>
                <div className={styles.nw}>
                  <div className={styles.pr}>
                    <label>
                      Industry/Sector <span className={styles.fro}>*</span>
                    </label>
                    <div className={styles.tr} onClick={choose}>
                      {net}
                    </div>
                    {active && (
                      <div className={`${styles.ku} ${styles.po}`}>
                        {options.map((option) => {
                          return (
                            <div
                              onClick={(e) => {
                                setNet(e.target.textContent);
                                setActive(false);
                              }}
                              className={styles.nm}
                            >
                              {option}
                            </div>
                          );
                          // console.log("hi");
                        })}
                      </div>
                    )}
                  </div>

                  <div className={styles.pr}>
                    <label>
                      Country of origin <span className={styles.fro}>*</span>
                    </label>
                    <div className={styles.tr} onClick={phoose}>
                      {nm}
                    </div>
                    {cool && (
                      <div className={`${styles.ku} ${styles.lo}`}>
                        {options.map((option) => {
                          return (
                            <div
                              onClick={(e) => {
                                setNm(e.target.textContent);
                                setCool(false);
                              }}
                              className={styles.nm}
                            >
                              {option}
                            </div>
                          );
                          // console.log("hi");
                        })}
                      </div>
                    )}
                  </div>

                  <div className={styles.pr}>
                    <label>
                      Bussiness size <span className={styles.fro}>*</span>
                    </label>
                    <div className={styles.tr} onClick={lhoose}>
                      {fil}
                    </div>
                    {pull && (
                      <div className={`${styles.ku} ${styles.vo}`}>
                        {options.map((option) => {
                          return (
                            <div
                              onClick={(e) => {
                                setFil(e.target.textContent);
                                setPull(false);
                              }}
                              className={styles.nm}
                            >
                              {option}
                            </div>
                          );
                          // console.log("hi");
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className={styles.pr}>
                    <label>
                      Bussiness size <span className={styles.fro}>*</span>
                    </label>
                    <div className={styles.tr} onClick={mhoose}>
                      {va}
                    </div>
                    {fre && (
                      <div className={`${styles.ku} ${styles.mo}`}>
                        {options.map((option) => {
                          return (
                            <div
                              onClick={(e) => {
                                setVa(e.target.textContent);
                                setFre(false);
                              }}
                              className={styles.nm}
                            >
                              {option}
                            </div>
                          );
                          // console.log("hi");
                        })}
                      </div>
                    )}
                  </div>
                  <div>
                    <label for="founding year">Founding year</label>
                    <input
                      name="Founding year"
                      id="Founding year"
                      className={styles["ol-three"]}
                      type="number"
                      placeholder="ex. 2020"
                    />
                  </div>

                  <div className={styles.cr}>
                    <label for="website">
                      Website<span className={styles.fro}>*</span>
                    </label>
                    <input
                      name="website"
                      id="website"
                      className={styles["ol-three"]}
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.re}>
                <label>
                  Language(s) Spoken <span className={styles.fro}>*</span>
                </label>
                <div className={styles.oo}>
                  <div className={styles.dm}>
                    {ro.map((po, index) => {
                      return (
                        <div
                          // onClick={deleteLng}
                          key={index}
                          className={styles.kk}
                        >
                          {po}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className={styles.pp}
                            onClick={() => deleteLng(index)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                  <input
                    placeholder="Type your Language"
                    ref={enteredName}
                    className={styles.co}
                  />
                  <button className={styles.btn} onClick={newMethod}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={styles.mm}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className={styles.ii}>Add</span>
                  </button>
                </div>
              </div>

              <div className={`${styles.re} ${styles.ll}`}>
                <label>Existing international market presence (if any)</label>
                <div className={styles.oo}>
                  <div className={styles.dm}>
                    {pl.map((po, index) => {
                      return (
                        <div
                          // onClick={deleteLng}
                          key={index}
                          className={styles.kk}
                        >
                          {po}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className={styles.pp}
                            onClick={() => deleteLng2(index)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                  <input
                    placeholder="Country name"
                    ref={enteredName2}
                    className={styles.co}
                  />
                  <button className={styles.btn} onClick={newMethod2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={styles.mm}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className={styles.ii}>Add</span>
                  </button>
                </div>
              </div>

              <h2 className={styles.mb}>Expansion details</h2>
              <div className={`${styles.pr} ${styles.hh}`}>
                <label>
                  Prefered timeline of market entry{" "}
                  <span className={styles.fro}>*</span>
                </label>
                <div className={`${styles.tr} ${styles.tt}`} onClick={qhoose}>
                  {qq}
                </div>
                {show && (
                  <div className={`${styles.ku} ${styles.lo} ${styles.uu}`}>
                    {options.map((option) => {
                      return (
                        <div
                          onClick={(e) => {
                            setqq(e.target.textContent);
                            setShow(false);
                          }}
                          className={styles.nm}
                        >
                          {option}
                        </div>
                      );
                      // console.log("hi");
                    })}
                  </div>
                )}
              </div>

              <div className={`${styles.re} ${styles.ul}`}>
                <label>
                  Interested in new markets for expansions ? please add country{" "}
                  <span className={styles.fro}>*</span>
                </label>
                <div className={styles.oo}>
                  <div className={styles.dm}>
                    {sw.map((po, index) => {
                      return (
                        <div
                          // onClick={deleteLng}
                          key={index}
                          className={styles.kk}
                        >
                          {po}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className={styles.pp}
                            onClick={() => deleteLng3(index)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                  <input
                    placeholder="Type your Language"
                    ref={enteredName3}
                    className={styles.co}
                  />
                  <button className={styles.btn} onClick={newMethod3}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={styles.mm}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className={styles.ii}>Add</span>
                  </button>
                </div>
              </div>
              <div className={styles.vv}>
                <div className={styles.iml}>
                  <label className={styles.klk}>
                    Prefered expansion mode
                    <span className={styles.fro}>*</span>
                  </label>
                  <div className={styles.ot}>
                    <input
                      type="checkbox"
                      name="expansion mode1"
                      id="expansion mode1"
                    />
                    <label for="expansion mode1">Set up an office</label>
                  </div>
                  <div className={styles.ot}>
                    <input
                      type="checkbox"
                      name="expansion mode2"
                      id="expansion mode2"
                    />
                    <label for="expansion mode2">Hire a team</label>
                  </div>
                  <div className={styles.ot}>
                    <input
                      type="checkbox"
                      name="expansion mode3"
                      id="expansion mode3"
                    />
                    <label for="expansion mode3">eCommerce</label>
                  </div>
                  <div className={styles.ot}>
                    <input
                      type="checkbox"
                      name="expansion mode4"
                      id="expansion mode4"
                    />
                    <label for="expansion mode4">Venture partnership</label>
                  </div>
                </div>
                <div className={styles.bvb}>
                  <div className={styles.ot}>
                    <input type="checkbox" name="other" id="other" />
                    <label>Other</label>
                  </div>
                  <div>
                    <label>Please specify</label>
                    <input className={styles.ol} />
                  </div>
                </div>
              </div>
              <hr className={styles.bwb} />
              <button type="submit" className={styles.btn1}>
                Save & Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BussInfo;
