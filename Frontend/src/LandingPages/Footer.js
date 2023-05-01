import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrSkype } from "react-icons/gr";
import { AiOutlineGooglePlus } from "react-icons/ai";
import LOGO from "../AID_MEDIA_LOGO.png";

const Footer = () => {
  return (
    <>
      <div className="footer_div ">
        <div className=" inner_footer_div">
          <div className="first_part"></div>

          <div className=" row second_part">
            <div className=" col-lg-3 col-sm-6 l_part ">
              <img
                src={LOGO}
                className="ms-5 h-auto w-50 mx-auto "
                width={70}
                alt=" AID Media "
              />
            </div>
            {/* <div className="m_part"> */}
            <div className=" col-lg-2  col-sm-6  py-3 first">
              {/* <div className="inner_f_items"> */}
              <h2 className="fs-2 fw-bold">Company</h2>
              <p className="fs-3">Home</p>
              <p className="fs-3">Contact</p>
              <p className="fs-3">Sign Up</p>
              <p className="fs-3">Sign In</p>
              {/* </div> */}
            </div>
            <div className=" col-lg-2 col-sm-6 py-3 second">
              {/* <div className="inner_f_items"> */}
              <h2 className="fs-2 fw-bold">Legal</h2>
              <p className="fs-3">Terms & Conditions</p>
              <p className="fs-3">Disclaimer</p>
              <p className="fs-3">Privacy Policy</p>
              {/* </div> */}
            </div>
            <div className="col-lg-2 col-sm-6 py-3 third">
              {/* <div className="inner_f_items"> */}
              <h2 className="fs-2 fw-bold"> Credentials & Support</h2>
              <p className="fs-3">FAQ’s</p>
              <p className="fs-3">Telegram</p>
              <p className="fs-3">Contact</p>
              <p className="fs-3">Resources</p>
              {/* </div> */}
            </div>
            {/* </div> */}
            <div className=" col-lg-3 col-sm-12 py-3 r_part">
              <div className="inner_r_part px-3">
                <h2 className="fs-2 fw-bold">Project</h2>
                <div className="images_r_part py-4">
                  <div className="top_row">
                    <div className="top_images_r_part">
                      <img src="./img/gallery-6.jpg" alt="" />
                    </div>
                    <div className="top_images_r_part">
                      <img src="./img/gallery-7.jpg" alt="" />
                    </div>
                    <div className="top_images_r_part">
                      <img src="./img/gallery-8.jpg" alt="" />
                    </div>

                    <div className="top_images_r_part">
                      <img src="./img/gallery-9.jpg" alt="" />
                    </div>
                    <div className="top_images_r_part">
                      <img src="./img/gallery-10.jpg" alt="" />
                    </div>
                    <div className="top_images_r_part">
                      <img src="./img/gallery-11.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="third_part">
            <div className="f_tp_footer">
              <h3>Privacy Policy/Terms & Conditions</h3>
            </div>
            <div className="s_tp_footer">
              <div className="inner_s_tp_footer">
                <div className="logos">
                  <FaFacebookF />
                </div>
                <div className="logos">
                  <BsTwitter />
                </div>
                <div className="logos">
                  <AiOutlineGooglePlus />
                </div>
                <div className="logos">
                  <GrSkype />
                </div>
              </div>
            </div>
            <div className="t_tp_footer mt-2">
              <h3 className="fs-4 text-center">
                © Copyright 2023 Aid Media | All Rights Reserved. | Designed &
                Developed by Freelance Technology
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
