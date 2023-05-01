import React from "react";

import "./CSS/homePage.css";
import { HeaderCard, ServiceBox, ProudCard } from "./Cards";
import  { MainNavbar } from "./Navbar";
import Footer from "./Footer";

import {
  BsBank2,
  BsArrowRight,
  BsTrophy,
  BsFillPeopleFill,
} from "react-icons/bs";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineInsurance,
} from "react-icons/ai";
import { FaBalanceScale, FaIndustry } from "react-icons/fa";
import { GiLifeTap } from "react-icons/gi";
import { MdTrolley } from "react-icons/md";

const About = () => {
  return (
    <div>
      
      <MainNavbar />

      <HeaderCard header="About company" path="HOME  >  ABOUT US" />

      <div className="row px-3 py-5 ">
        <div className="col-lg-6 col-sm-12 ps-5 py-5 ">
          <h1
            className="fw-bolder  "
            style={{
              fontSize: 35,
            }}
          >
            Professional And <br />
            Dedicated Consulting Services
          </h1>

          <div className="circles_div wrk_prog_circle my-5">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>

          <p className="fs-3 ">
          How all this mistaken idea of denouncing pleasure and praising pain was born & we will give you a complete account of the system expound the actual teaching the great explorer.
          </p>
        </div>
        <div className="col-lg-6  col-sm-12 py-5 ">
          <div className="experience_year_block">
            <div className="image">
              <img src="./img/image-46.jpg" alt="" />
              <h2>14</h2>

              <div className="text">
                Years <br />
                experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row ">
        <div className="col-lg-6 col-sm-12 py-5 reason_about">
          <img src="./img/image-45.jpg" alt="" className="img-fluid" />
        </div>

        <div className="col-lg-6  col-sm-12 py-5  ">
          <h1
            className="fw-bolder "
            style={{
              fontSize: 35,
            }}
          >
            Reason For Choosing Our <br />
            Consultancy
          </h1>

          <div className="circles_div wrk_prog_circle my-5">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>

          <div className="row py-5 ">
            <div className="col-sm-2 py-4">
              <div className="Consultancy_icon"></div>
            </div>
            <div className=" col-sm-10">
              <h2 className="fs-2 fw-bolder">
                Flexibility to serve you <br />
                better service
              </h2>
              <p className="fs-3 pt-3">
                Complete accounts of the systems and expound teachings of the
                great explorers.
              </p>
            </div>
          </div>

          <div className="row  py-5 ">
            <div className="col-sm-2 py-4">
              <div className="Consultancy_icon"></div>
            </div>
            <div className="col-sm-9">
              <h2 className="fs-2 fw-bolder">
                Tailored advice and <br />
                support
              </h2>
              <p className="fs-3 pt-3">
                Business it will frequently occur that pleasures have to
                repudiated accepted.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row fun_facts_section py-5">
        <div className="col-sm-12 py-5">
          <div
            className="row "
            style={{
              color: "white",
            }}
          >
            <div className="col-lg-4 col-sm-12 ">
              <div className="row">
                <div className="col-lg-5 col-sm-1 text-end pt-5  fun_facts_icon">
                  <AiOutlineFundProjectionScreen
                    style={{
                      color: "#fff",
                      fontSize: 50,
                      fontWeight: "bold",
                    }}
                  />
                </div>
                <div
                  className="col-lg-7 col-sm-10 p-5  "
                  style={{
                    borderRight: "2px solid grey",
                  }}
                >
                  <p className="fs-3 fw-bold pb-3">PROJECTS</p>
                  <h2
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                    }}
                  >
                    2.5K
                  </h2>
                  <p className="fw-bold fs-2">Successful Projects</p>

                  <p
                    className="fs-3 "
                    style={{
                      color: "#fd4a36",
                    }}
                  >
                    -Our Projects
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 ">
              <div className="row ">
                <div className="col-lg-5 col-sm-1 text-end pt-5 fun_facts_icon ">
                  <BsFillPeopleFill
                    style={{
                      color: "#fff",
                      fontSize: 50,
                      fontWeight: "bold",
                    }}
                  />
                </div>
                <div
                  className="col-lg-7 col-sm-11 p-5  "
                  style={{
                    borderRight: "2px solid grey",
                  }}
                >
                  <p className="fs-3 fw-bold pb-3">OUR TEAM</p>
                  <h2
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                    }}
                  >
                    138+
                  </h2>
                  <p className="fw-bold fs-2">Experienced Staff</p>

                  <p
                    className="fs-3 "
                    style={{
                      color: "#fd4a36",
                    }}
                  >
                    -Team Members
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-sm-12">
              <div className="row">
                <div className="col-lg-5 col-sm-1 text-end pt-5 fun_facts_icon ">
                  <BsTrophy
                    style={{
                      color: "#fff",
                      fontSize: 50,
                      fontWeight: "bold",
                    }}
                  />
                </div>

                <div
                  className="col-lg-7 col-sm-11 p-5  "
                  style={{
                    borderRight: "2px solid grey",
                  }}
                >
                  <p className="fs-3 fw-bold pb-3">HAPPY CLIENTS</p>
                  <h2
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                    }}
                  >
                    99%
                  </h2>
                  <p className="fw-bold fs-2">Client Satisfaction</p>

                  <p
                    className="fs-3 "
                    style={{
                      color: "#fd4a36",
                    }}
                  >
                    -Testimonials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry we served */}

      <div
        className="row p-5"
        style={{
          backgroundColor: "#f1f5f8",
        }}
      >
        <div className="col-sm-6 py-5">
          <h1
            className=" pb-5 "
            style={{
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Industries We Served
          </h1>

          <div className="circles_div wrk_prog_circle">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>

          <div className="row">
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="col-sm-6 py-5">
          <p className="fs-3">
            Which is the same as saying through shrinking from toil and pain{" "}
            <br />
            these perfectly simple and easy to distinguish.
          </p>
        </div>
      </div>

      <div
        className="row pb-5"
        style={{
          placeContent: "space-evenly",
          backgroundColor: "#f1f5f8",
        }}
      >
        <ServiceBox
          icon={<BsBank2 />}
          text={
            <div
              className=" fs-2 fw-bold "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              Banking & <br /> capital market
            </div>
          }
        />

        <ServiceBox
          icon={<AiOutlineInsurance />}
          text={
            <div
              className=" fs-2 fw-bold "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Finance & <br />
              insurance market
            </div>
          }
        />

        <ServiceBox
          icon={<MdTrolley />}
          text={
            <div
              className=" fs-2 fw-bold "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Logistic & <br />
              trasportation
            </div>
          }
        />

        <ServiceBox
          icon={<FaBalanceScale />}
          text={
            <div
              className=" fs-2 fw-bold "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Justice & <br />
              defence security
            </div>
          }
        />

        <ServiceBox
          icon={<FaIndustry />}
          text={
            <div
              className=" fs-2 fw-bold "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Energy & <br />
              resource industry
            </div>
          }
        />

        <ServiceBox
          icon={<GiLifeTap />}
          text={
            <div
              className=" fs-2 fw-bold "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Life & <br />
              health science
            </div>
          }
        />
      </div>

      <div className="row awards_con mt-5">
        <div className="row px-5 py-5">
          <div className="col-sm-12 px-5 py-5">
            <h1
              className="pb-4"
              style={{
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              Our Awards And Achivements
            </h1>

            <div className="circles_div wrk_prog_circle">
              <div className="circles"></div>
              <div className="circles"></div>
              <div className="circles circle_middel"></div>
              <div className="circles"></div>
              <div className="circles"></div>
            </div>

            <p className="fs-3 pt-5">
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except <br />
              obtain some advantage from it enjoy a pleasure.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8 px-5">
            <div className="row">
              <div
                className="col-lg-4 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="image mb-4">
                  <img
                    src="./img/award-8.png"
                    alt=""
                    className=".img-thumbnail"
                  />
                </div>
                <p className=" fw-bold fs-3 text-center">
                  Best consulting <br />
                  company
                </p>
              </div>

              <div
                className="col-lg-4 border-left border-start border-end "
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="image mb-4">
                  <img
                    src="./img/award-9.png"
                    alt=""
                    className=".img-thumbnail"
                  />
                </div>
                <p className=" fw-bold fs-3 text-center">
                  Best outsourcing <br />
                  advisors
                </p>
              </div>

              <div
                className="col-lg-4 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="image mb-4">
                  <img
                    src="./img/award-10.png"
                    alt=""
                    className=".img-thumbnail"
                  />
                </div>
                <p className=" fw-bold fs-3 text-center">
                  Customer choice for <br />
                  support
                </p>
              </div>
            </div>
            <p className="fs-3 px-5 py-5">
              We have won 27 more awards in our career. View All Awards{" "}
              <BsArrowRight className="fw-bold fs-2" />
            </p>
          </div>
        </div>
      </div>

      {/* proud to work */}

      <div
        className="row p-5"
        style={{
          backgroundColor: "#f1f5f8",
        }}
      >
        <div className="col-sm-6 py-5">
          <h1
            className=" pb-5 "
            style={{
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            We Proud To Work
          </h1>

          <div className="circles_div wrk_prog_circle">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>

          <div className="row">
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="col-sm-6 py-5">
          <p className="fs-3">
            Which is the same as saying through shrinking from toil and pain.
            These cases are perfectly simple and easy to distinguish.
          </p>
        </div>
      </div>
      <div
        className="row pb-5 mb-5 px-5"
        style={{
          placeContent: "space-evenly",
          backgroundColor: "#f1f5f8",
        }}
      >
        <ProudCard indus_img="./img/client-7.png" />
        <ProudCard indus_img="./img/client-8.png" />
        <ProudCard indus_img="./img/client-9.png" />
        <ProudCard indus_img="./img/client-10.png" />
        <ProudCard indus_img="./img/client-11.png" />
        <ProudCard indus_img="./img/client-12.png" />
        <ProudCard indus_img="./img/client-13.png" />
        <ProudCard indus_img="./img/client-14.png" />
      </div>

      <Footer />
    </div>
  );
};

export default About;
