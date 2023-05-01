import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../AID_MEDIA_LOGO.png";
import { BsClock } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      {/* top navbar */}
      <div className="row">
        <div className="col-sm-12 col-lg-12">
          <div className="f_header_top">
            <div className="inner_f_header_top">
              <div className="l_inner_f_header_top">
                <span
                  style={{
                    backgroundColor: "#fd4a36",
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingLeft: 9,
                    paddingRight: 9,
                    fontSize: 13,
                    borderRadius: 20,
                    marginRight: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  Too Little!
                </span>
                Receiving $100 / Hr Consulting.
                <span
                  style={{
                    fontSize: 13,
                    borderRadius: 20,
                    marginLeft: 8,
                    color: "#fd4a36",
                  }}
                >
                  Start Today
                </span>
              </div>
              <div className="r_inner_f_header_top">
                <div className="inner_r_inner">
                  <BsClock
                    style={{
                      fontSize: 13,
                      marginRight: 10,
                      color: "fd4a36",
                    }}
                  />
                  Office Hrs: Today 9.00am to 6.00pm
                </div>
                <div className="inner_l_inner">
                  <div className="t_inner">
                    <select name="language" id="lang">
                      <option value="English">English</option>
                    </select>
                  </div>
                  <div className="b_inner">
                    Powered by Google TranslateTranslate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MainNavbar = () => {
  const ToggleMenu = () => {
    document.getElementById("toggle_container").style.display = "flex";
  };

  const DisableMenu = () => {
    document.getElementById("toggle_container").style.display = "none";
  };

  const CompanyToggle = () => {
    let c_dom = document.getElementById("com_items");
    if (c_dom.style.display === "none") {
      c_dom.style.display = "flex";
    } else {
      c_dom.style.display = "none";
      document.getElementById("legal_items").style.display = "none";
    }
  };

  const LegalToggle = () => {
    let l_dom = document.getElementById("legal_items");
    if (l_dom.style.display === "none") {
      document.getElementById("com_items").style.display = "flex";
      l_dom.style.display = "flex";
    } else {
      document.getElementById("com_items").style.display = "flex";
      l_dom.style.display = "none";
    }
  };

  return (
    <>
      <div className=" nav_bar d-flex">
        <div className="d-inline fs-1 text-sm-center fw-bold py-4">
          <img
            src={LOGO}
            className="ms-5 h-auto"
            width={70}
            alt=" AID Media "
          />
        </div>
        <div className="d-inline fs-2 ms-auto">
          <div className="row py-5 ">
            <div className="">
              <div className="row menu_items me-4">
                <div className="col-sm-2 fs-5 text-center py-1 items ">
                  <Link to="/">HOME</Link>
                </div>
                <div className="col-sm-3 fs-5 text-center py-1 more_company items ">
                  COMPANY <MdKeyboardArrowDown className="fs-2 text-center " />
                  <div className="list_company_item py-3 ">
                    <div className="two_opt ">
                      <p className="px-3">
                        {" "}
                        <Link to="/about">ABOUT US</Link>{" "}
                      </p>
                      <p className="more_opt_legal px-3">
                        {" "}
                        LEGAL <GoPlus className="fw-bold fs-4" />
                        <div className=" py-3 px-4 more_legal">
                          <p>
                            {" "}
                            <Link to="/terms-conditions">
                              TERMS & CONDITIONS
                            </Link>{" "}
                          </p>
                          <p
                            style={{
                              borderTop: "1px solid #afadade3",
                              borderBottom: "1px solid #afadade3",
                            }}
                          >
                            <Link to="/disclaimer">DISCLAMER</Link>
                          </p>
                          <p>
                            {" "}
                            <Link to="/policy-privacy">PRIVACY POLICY</Link>
                          </p>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 fs-5 text-center py-1 items">
                  <Link to="/contact">CONTACT</Link>
                </div>
                <div className="col-sm-2 fs-5 text-center py-1 items">
                  <Link to="/sign-up"> SIGN UP</Link>
                </div>
                <div className="col-sm-2 fs-5 text-center py-1 items">
                  <Link to="/sign-in">SIGN IN</Link>
                </div>
              </div>
            </div>

            <FiMenu
              className="fs-1 ms-auto more_menu_icon me-3"
              style={{
                color: "#ffff",
                backgroundColor: "#201630",
                width: 40,
                height: 40,
              }}
              onClick={ToggleMenu}
            />
          </div>
        </div>
      </div>

      {/* upper container */}
      <div className="upper_container" id="toggle_container">
        <div className="left_con_upper"></div>
        <div className="right_con_upper">
          <div className="close_logo" onClick={DisableMenu}>
            <RxCrossCircled />
          </div>

          <div className="r_top_con">
            <img
              src={LOGO}
              className="ms-5 h-auto"
              width={70}
              alt=" AID Media "
            />
          </div>
          <div className="r_bottom_con">
            <div className="item_lists ps-2">
              <Link to="/">HOME</Link>{" "}
            </div>
            <div className="item_lists ps-2 comp_item" onClick={CompanyToggle}>
              COMPANY <GoPlus className="fw-bold fs-4" />
            </div>

            <div className="company_lists" id="com_items">
              <div className="item_lists ps-4">
                {" "}
                <Link to="/about">ABOUT US</Link>
              </div>
              <div className="item_lists ps-4 legal_item" onClick={LegalToggle}>
                {" "}
                LEGAL <GoPlus className="fw-bold fs-4" />
              </div>
            </div>
            <div className="legal_lists" id="legal_items">
              <div className="item_lists ps-5">
                {" "}
                <Link to="/terms-conditions">TERMS & CONDITIONS</Link>
              </div>
              <div className="item_lists ps-5">
                {" "}
                <Link to="/disclaimer">DISCLAMER</Link>
              </div>
              <div className="item_lists ps-5">
                {" "}
                <Link to="/policy-privacy">PRIVACY POLICY</Link>{" "}
              </div>
            </div>

            <div className="item_lists ps-2">
              {" "}
              <Link to="/contact">CONTACT</Link>
            </div>
            <div className="item_lists ps-2">
              {" "}
              <Link to="/sign-up">SIGN UP</Link>
            </div>
            <div className="item_lists ps-2">
              {" "}
              <Link to="/sign-in">SIGN IN</Link>
            </div>

            {/* <div className="menu_logos">
              <div className="inner_logos">
                <div className="logs_items">
                  <BsTwitter />
                </div>
                <div className="logs_items">
                  <BsFacebook />
                </div>
                <div className="logs_items">
                  <BsPinterest />
                </div>
                <div className="logs_items">
                  <BsInstagram />
                </div>
                <div className="logs_items">
                  <BsYoutube />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
