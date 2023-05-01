import React from "react";
import { Link } from "react-router-dom";

import "./CSS/homePage.css"
import Cards, { ImgCard, ProgCard, DevelopingCards } from "./Cards";
import Footer from "./Footer";
import { MainNavbar } from "./Navbar";

import { SiSitepoint } from "react-icons/si";
import { MdStarRate } from "react-icons/md";
import { HiOutlineChat } from "react-icons/hi";

const HomePage = () => {

  return (
    <>
      <MainNavbar />
      <div className="main_container">
        {/* Slider */}
        <div className="container-fluid px-0 slider_con ">
          <div className="row px-0 ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* slide 1  */}
                <div className="carousel-item active ">
                  <img
                    src="./img/3.jpg"
                    className="d-block w-100 carousel_main_img"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block slider_img_text">
                    <div className="slider_title1 slider3">
                      <p>Get More. Make Less </p>
                      <h1>
                        LETS START <br /> WITH FINANCE.{" "}
                      </h1>
                      <div className="line_image "></div>
                      <div className="line_image l2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, ullam?.
                      </p>
                      <div className="btn_slider">
                        <button className="btn_o_w">Our Comapy</button>
                        <Link to="/contact"><button className="btn_o_w">Contact Us</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slide 2  */}
                <div className="carousel-item ">
                  <img
                    src="./img/1.jpg"
                    className="d-block w-100 carousel_main_img"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block slider_img_text">
                    <div className="slider_title2 slider3">
                      {/* <div className="inner_l_slider2"></div> */}
                      <div className="inner_r_slider2">
                        <p>BHARAT FINANCE WILL HELPING </p>
                        <h1>
                          BUILD AND <br /> GROW BUSINESS{" "}
                        </h1>
                        <div className="line_image "></div>
                        <div className="line_image l2"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Animi, ullam?.
                        </p>
                        <div className="btn_slider">
                          <button className="btn_o_w">Our Comapy</button>
                          <button className="btn_w_o">Contact Us</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slide 3 */}
                <div className="carousel-item ">
                  <img
                    src="./img/2.jpg"
                    className="d-block w-100 carousel_main_img"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block slider_img_text">
                    <div className="slider_title1 slider3">
                      <p>BHARAT FINANCE </p>
                      <h1>
                        TAKE CARE <br /> OF YOUR FUTURE{" "}
                      </h1>
                      <div className="line_image "></div>
                      <div className="line_image l2">
                        <div className="inner_l2"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, ullam?.
                      </p>
                      <div className="btn_slider">
                        <button className="btn_o_w">Sign UP</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon btn_slide"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon btn_slide"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* Developing Leaders */}
        <div className="row mt-5 ">
          <div className="col-sm-12">
            <div className="row">
              {/* <div className="col-sm-2 bg-danger "></div> */}
              <div
                className="col-sm-10 "
                style={{
                  backgroundColor: "#f1f5f8",
                }}
              >
                <div className="row ">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <h1
                      className="py-5 mt-5 text-center"
                      style={{
                        fontSize: 35,
                        fontWeight: "bold",
                      }}
                    >
                      Developing Leaders & <br />
                      High-Performance Creative Teams
                    </h1>

                    <div className="circles_div r_padding">
                      <div className="circles"></div>
                      <div className="circles"></div>
                      <div className="circles circle_middel"></div>
                      <div className="circles"></div>
                      <div className="circles"></div>
                    </div>
                  </div>
                </div>

                <div className="row  developing_leaders_con py-5">
                  <div className="col-sm-12 fs-1 text-light py-5 px-5 inner_developing_leaders ">
                    <DevelopingCards />
                    <DevelopingCards />
                    <DevelopingCards />
                  </div>
                </div>

                <div className="row py-5">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <p className="fs-3 text-center">
                      We help take your small business to the next level. Don’t
                      hesitate to contact us.
                    </p>
                    <h2 className="fs-3 fw-5 text-center">
                      30 Minutes Free Consultation
                    </h2>
                    <div className="btn_slider">
                      <button className="shadow-lg btn_w_o">
                        Send Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>

            {/* <div className="row  developing_leaders_con">
                <div className="col-sm-5 fs-1 text-light">
                            hello
                 </div>
            </div> */}
          </div>
        </div>

        {/* How can we help You */}
        <section className="row ">
          <div className="col-lg-6 col-sm-12">
            <div className="logo mt-5 img-thumbnail float-end rounded-circle ">
              <div className="log_inner p-4 m-4 img-thumbnail float-end rounded-circle shadow-lg  ">
                <img
                  src="./img/icon-12.png"
                  alt=""
                  className="img-thumbnail float-end   "
                />
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 p-2 ms-5"
                style={{
                  marginTop: 150,
                  backgroundColor: "#f1f2f5",
                }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-0 help_you">
            <div className="row">
              <div
                className="col-sm-12 py-5 fw-bolder"
                style={{
                  fontSize: 33,
                  marginTop: 90,
                }}
              >
                How We Can
                <br />
                Help You ?
                <div
                  className="circles_div wrk_prog_circle"
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    color: "#0c2957",
                  }}
                >
                  <div className="circles"></div>
                  <div className="circles"></div>
                  <div className="circles circle_middel"></div>
                  <div className="circles"></div>
                  <div className="circles"></div>
                </div>
                <div className="row pe-5 py-4">
                  <div className="col-sm-12 fs-4  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, pariatur deserunt vero quasi sit quae ratione
                    consequatur, ipsa maxime tempora architecto illum ipsum, ex
                    corrupti voluptas deleniti asperiores similique inventore?
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 ">
                    <ul className="fs-1">
                      <li
                        style={{
                          color: "#fd4a36",
                        }}
                      >
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                    <p className="fs-2 px-5">
                      Lorem ipsum dolor Veniam, aperiam.
                    </p>
                    <ul className="fs-1">
                      <li
                        style={{
                          color: "#fd4a36",
                        }}
                      >
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                    <p className="fs-2 px-5">
                      Lorem ipsum dolor Veniam, aperiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* container Boxes */}
        <div className="container-fluid px-0 con_6">
          <div
            className="row d-sm-flex align-items-center justify-content-evenly content "
            style={{
              padding: 50,
            }}
          >
            <div className="col-sm-12  col-lg-4 ">
              <Cards
                t_text="Projects with 100% satisfaction"
                m_text="2.5K"
                b_text="Power of choices when nothing what we like best principle."
                logo_img="./img/icon-1.png"
              />
            </div>
            <div className="col-sm-12 col-lg-4  ">
              <Cards
                t_text="Experienced & Professional team"
                m_text="138+"
                b_text="Except to obtain some of advantages from it has any right to find."
                logo_img="./img/icon-2.png"
              />
            </div>
            <div className="col-sm-12 col-lg-4 ">
              <Cards
                t_text="Revenue of last financial year"
                m_text="9.8%"
                b_text="Complete account of the system and expound actual teachings."
                logo_img="./img/icon-3.png"
              />
            </div>
          </div>
        </div>

        {/* Reasons for choosing */}
        <div className="row mt-5 reason_main_con">
          <div
            className="col-lg-12"
            style={{
              position: "relative",
            }}
          >
            <img
              src="./img/pattern-3.png"
              alt=""
              className="img-fluid float-end pattern_3_img"
            />

            <div
              className="row reason_image"
              style={{
                position: "absolute",
              }}
            >
              <div className="col-lg-12 ">
                <img src="./img/image-1.png" alt="" className="img-fluid " />
              </div>
            </div>

            {/* inside the choosing for Finance */}
            <div className="row  pt-5 mt-5 main_Consultation_container ">
              <div
                className="col-sm-12  col-lg-6 px-5"
                style={
                  {
                    // position:'relative'
                  }
                }
              >
                <div className="row">
                  <div
                    className="col-sm-12 p-5 Consultation_container "
                    style={
                      {
                        // position:'absolute',
                      }
                    }
                  >
                    <h1
                      className=" py-5 fw-bolder"
                      style={{
                        fontSize: 40,
                        color: "#201630",
                      }}
                    >
                      Request for Our Free Consultation
                    </h1>
                    <form className="py-5 ">
                      <div className="row">
                        <div className="mb-3 col-sm-6">
                          <input
                            type="text"
                            className="form-control fs-3"
                            id="exampleInputEmail1"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-3 col-sm-6">
                          <input
                            type="email"
                            className="form-control fs-3"
                            id="exampleInputEmail1"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-sm-6">
                          <input
                            type="number"
                            className="form-control fs-3"
                            id="exampleInputEmail1"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-3 col-sm-6">
                          <select
                            className="form-select fs-3"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="btn_slider">
                            <button className="shadow-lg btn_w_o">
                              Send Request
                            </button>
                          </div>
                        </div>
                        <div className="col-sm-6 flexible_schedule">
                          <p className="fs-3 text-center">
                            For flexible schedule
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 ">
                <div className="row">
                  <div className="col-sm-12">
                    <h1
                      className="fw-bolder p-5"
                      style={{
                        color: "#fff",
                        fontSize: 35,
                      }}
                    >
                      Reason For Choosing Our <br />
                      Finance <br />
                      Plateform
                    </h1>
                    <div className="circles_div wrk_prog_circle">
                      <div className="circles"></div>
                      <div className="circles"></div>
                      <div className="circles circle_middel"></div>
                      <div className="circles"></div>
                      <div className="circles"></div>
                    </div>

                    <div className="row mt-5 ">
                      <div className="col-sm-1 col-lg-2 single_feacture_point mt-4 pt-1">
                        <SiSitepoint />
                      </div>
                      {/* <div className="col-sm-1"></div> */}
                      <div
                        className="col-sm-9 "
                        style={{
                          color: "#fff",
                        }}
                      >
                        <h2 className="fs-1 fw-bolder pt-5">
                          Lorem ipsum dolor sit
                        </h2>
                        <p className="fs-4 mt-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ut, accusamus,
                        </p>
                      </div>
                    </div>

                    <div className="row  mt-5 ">
                      <div className="col-sm-1 col-lg-2 single_feacture_point mt-4 pt-1">
                        <SiSitepoint />
                      </div>
                      {/* <div className="col-sm-1"></div> */}
                      <div
                        className="col-sm-9 "
                        style={{
                          color: "#fff",
                        }}
                      >
                        <h2 className="fs-1 fw-bolder pt-5">
                          Lorem ipsum dolor sit
                        </h2>
                        <p className="fs-4 mt-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ut, accusamus,
                        </p>
                      </div>
                    </div>

                    <div className="row mt-5 ">
                      <div className="col-sm-1 col-lg-2 single_feacture_point mt-4 pt-1">
                        <SiSitepoint />
                      </div>
                      {/* <div className="col-sm-1"></div> */}
                      <div
                        className="col-sm-9 "
                        style={{
                          color: "#fff",
                        }}
                      >
                        <h2 className="fs-1 fw-bolder pt-5">
                          Lorem ipsum dolor sit
                        </h2>
                        <p className="fs-4 mt-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ut, accusamus,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Projects */}
        <div className="row">
          <div className="col-sm-12">
            <div className="row proj_con">
              <div className="col-sm-12">
                <div className="sec_bg"></div>
                <h1
                  className=" text-center fw-bold"
                  style={{
                    marginTop: 50,
                    paddingTop: 100,
                    color: "#201630",
                    fontSize: 35,
                  }}
                >
                  Our Projects Make Uniqueness <br />
                  From Others
                </h1>
                <div className="circles_div">
                  <div className="circles"></div>
                  <div className="circles"></div>
                  <div className="circles circle_middel"></div>
                  <div className="circles"></div>
                  <div className="circles"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="proj_con_card ">
          <div className="inner_con_proj">
            <ImgCard img_src={"./img/gallery-1.jpg"} />
            <ImgCard img_src={"./img/gallery-2.jpg"} />
            <ImgCard img_src={"./img/gallery-3.jpg"} />
            <ImgCard img_src={"./img/gallery-4.jpg"} />
            <ImgCard img_src={"./img/gallery-5.jpg"} />
            <ImgCard img_src={"./img/gallery-1.jpg"} />
          </div>
        </div>
        {/* <div className="proj_con_card">
        <div className="inner_con_proj">
            <ImgCard img_src={'./img/gallery-4.jpg'} />
            <ImgCard img_src={'./img/gallery-5.jpg'} />
            <ImgCard img_src={'./img/gallery-5.jpg'} />
            

        </div>
 </div> */}

        {/* work progress */}
        <div className="wrk_progress">
          <div className="inner_wrk_progress">
            <div className="header_wrk_progress">Our Basic Work Processs</div>
            <div className="circles_div wrk_prog_circle">
              <div className="circles"></div>
              <div className="circles"></div>
              <div className="circles circle_middel"></div>
              <div className="circles"></div>
              <div className="circles"></div>
            </div>

            <div className="wrk_progress_para fs-2">
              We aim to acquire a significant market share in financial services
              <br />
              distribution with assessment performed from various perspectives
              of creditability in absence of proper and systematic.
            </div>

            <div className="wrk_progress_box">
              <ProgCard
                p_h="01. MAKE AN ACCOUNT"
                p_pic="./img/icon-4.png"
                p_l="REGISTER"
              />
              <ProgCard
                p_h="02.CHOOSE PLAN"
                p_pic="./img/icon-5.png"
                p_l="PAY FOR MEMBERSHIP"
              />
              <ProgCard
                p_h="03. DO TASK"
                p_pic="./img/icon-6.png"
                p_l="COMPLETE YOUR TASK"
              />
            </div>
          </div>
        </div>

        {/* bottom carousel */}
        <div className="row below_carousel">
          <div className="col-lg-6 col-sm-12 ">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img
                    src="./img/image-6.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="./img/image-7.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-sm-12 bottom_slider"
            style={{
              display: "flex",
              //    alignItems: "center",
              //    justifyContent: "center",
              color: "#fff",
            }}
          >
            <div
              id="carouselExampleSlidesOnly "
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <div className="b_slider_content">
                    <div className="row py-5">
                      <div className="col-sm 12 ">
                        <HiOutlineChat />
                        <h1>Best Service Ever, We Highly Recommend!</h1>
                        <p>
                          Finance’s is specialized retail financing organization
                          engaged in financial services.
                        </p>
                        <p className="stars">
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="b_slider_content">
                    <div className="row py-5">
                      <div className="col-sm 12 ">
                        <HiOutlineChat />
                        <h1>Best Service Ever, We Highly Recommend!</h1>
                        <p>
                          Finance’s is specialized retail financing organization
                          engaged in financial services.
                        </p>
                        <p className="stars">
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* feactures section two */}

        <div className="feacture_sections_two">
          <div className="inner_f_s_t">
            <div className="left_feacture_section  ">
              <div className="inner_left_feacture ">
                <div className="row py-5 px-4 overlay_l_div">
                  <div className="col-sm-2 py-3">
                    <img
                      src="./img/icon-9.png"
                      alt=""
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="col-sm-10 py-3">
                    <h2 className="fs-2">Become a Partner of Bharat Finance</h2>
                    <p className="fs-4">
                      To become our partner you need to register on our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_feacture_section ">
              <div className="inner_right_feacture ">
                <div className="row py-5 px-4 overlay_r_div">
                  <div className="col-sm-2 py-3 ">
                    <img
                      src="./img/icon-10.png"
                      alt=""
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="col-sm-10 py-3">
                    <h2 className="fs-2">
                      Career Opportunities in Bharat Finance
                    </h2>
                    <p className="fs-4">
                      Anyone who is our registered partner can earn money
                      anywhere anytime using internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
