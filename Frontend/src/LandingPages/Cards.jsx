import React from "react";
import {
  
  BsArrowRight,
 
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Cards = ({ t_text, m_text, b_text, logo_img }) => {
  return (
    <div className="container-fluid shadow-lg content_box ">
      <div
        className="row"
        style={{
          // padding:30,
          backgroundColor: "#fff",
          borderRadius: 15,
          paddingRight: 25,
          paddingLeft: 25,
          paddingTop: 20,
          paddingBottom: 20,
          marginBottom: 20,
        }}
      >
        <div className="col-sm-12">
          <div className="row ">
            <div className="col-sm-3">
              <img src={logo_img} alt="" />
            </div>
            <div className="col-sm-9 fs-2 fw-bold">{t_text}</div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 "
              style={{ fontWeight: 900, fontSize: 70, color: "#fd4a36" }}
            >
              {m_text}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 fs-4 fw-bold">{b_text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImgCard = ({ img_src }) => {
  return (
    <div className="card_con ">
      <div className="inner_card_con">
        <img src={img_src} alt="...." className="" />
      </div>

      <div className="cover">
        <p className="fs-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          corrupti dicta temporibus atque consequuntur modi veniam asperiores
          at! Fugiat voluptatum maiores necessitatibus quis, rerum quasi dolorem
          iure blanditiis consequatur aliquid. Autem, voluptate.
        </p>
      </div>
    </div>
  );
};

export const ProgCard = ({ p_h, p_pic, p_l }) => {
  return (
    <div className="p_card">
      <div className="p_inner_card">
        <div className="f_p_inner_card">
          <div className="p_lines"></div>
          <h4>{p_h}</h4>
          <div className="p_lines"></div>
        </div>
        <div className="m_p_inner_card">
          <img src={p_pic} alt="" />
        </div>
        <div className="l_p_inner_card">
          <h2>{p_l}</h2>
        </div>
      </div>
    </div>
  );
};

export const HeaderCard = ({ header, path }) => {
  return (
    <>
      <div className="main_img_container">
        <div className="img_title">
          <div className="title_text">
            <h1>{header}</h1>
            <p>{path}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const ContactCards = () => {
  return (
    <div className="col-sm-3 shadow-lg ">
      <div className="row  py-4 px-3 ">
        <div className="col-sm-2">
          <img src="./img/icon-50.png" alt="" />
        </div>
        <div
          className="col-sm-10 ps-5 "
          style={{
            verticalAlign: "center",
          }}
        >
          <h1 className="fs-2 fw-bold">Houston</h1>
          <p className="fs-4">
            3333 Raleigh St, Houston, <br />
            TX 77021, USA.
          </p>
        </div>
      </div>
    </div>
  );
};

export const SlidingBox = () => {
  return (
    <div className="sliding_box_main my-5">
      <div className="header_s_b py-4 px-5">
        <h1 className="fs-2">01. What does you do?</h1>
        <p
          className="fs-1 fw-bold "
          style={{
            cursor: "pointer",
          }}
        >
          <BsArrowRight />
        </p>
      </div>
      <div className="dis_s_b fs-4 p-5 shadow-lg  ">
        Same as saying through shrinking from toil and pain these actual
        teachings of the great explorer of the truth, the master builder of
        human happiness.
      </div>
    </div>
  );
};

export const ServiceBox = ({ icon, text }) => {
  return (
    <div
      className="col-lg-4 col-sm-6 py-3 px-4 "
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="service_boxes py-5 px-3 shadow rounded">
        <div className="icon_box">
          <span className="align-middle">{icon}</span>
        </div>
        {text}
      </div>
    </div>
  );
};

export const DevelopingCards = () => {
  return (
    <>
      <div className=" dev_led_main py-4 my-5">
        <div className="image">
          <div className="icon">
            <span>
              <IoHomeOutline />
            </span>
          </div>
          <img src="./img/image-1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="content ">
          <h4
            className="fs-4 text-center"
            style={{
              color: "#fd4a36",
            }}
          >
            EXPLORE
          </h4>
          <h3 className="fs-2 text-center">Our Company History</h3>
        </div>

        <div className="overlay">
          <div className="content">
            <h4
              className="fs-3"
              style={{
                color: "#fd4a36",
              }}
            >
              EXPLORE
            </h4>
            <h3 className="fs-2">Our Company History</h3>
          </div>
          <div className="text">
            <p className="fs-4 text-light text-center px-5">
              In a free hour when our power choices when proveprevents best all
              easy to distinguish.
            </p>

            <div className="link_btn">
              <a href="/">
                <MdKeyboardArrowRight className="fs-1 fw-bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProudCard = ({ indus_img }) => {
  return (
    <>
      <div
        className="col-lg-3 col-md-6 border px-5 py-5"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={indus_img} alt="" />
      </div>
    </>
  );
};

export default Cards;
