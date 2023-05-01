import React from "react";

import "./CSS/homePage.css";
import { HeaderCard } from "./Cards";
import Navbar, { MainNavbar } from "./Navbar";

const PolicyPrivacy = () => {
  return (
    <>
      <MainNavbar />
      <div>
        <HeaderCard header="Privacy Policy" path="HOME >  PRIVACY POLICY" />

        <div className="header_title">
          <h1>Privacy Policy For AID MEDIA!</h1>
        </div>
        <div className="t_c_para">
          <div className="circles_div wrk_prog_circle">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p className="fs-4">
                At AID MEDIA PVT. LTD., accessible from
                https://aidmedia.in/, one of our main priorities is the
                privacy of our visitors. This Privacy Policy document contains
                types of information that is collected and recorded by AID MEDIA
                PVT. LTD. and how we use it. If you have additional questions or
                require more information about our Privacy Policy, do not
                hesitate to contact us.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Log Files
              </h1>
              <p className="fs-4">
                AID MEDIA PVT. LTD. Follows a standard procedure of using log
                files. These files log visitors when they visit websites. All
                hosting companies do this and a part of hosting services'
                analytics. The information collected by log files include
                internet protocol (IP) addresses, browser type, Internet Service
                Provider (ISP), date and time stamp, referring/exit pages, and
                possibly the number of clicks. These are not linked to any
                information that is personally identifiable. The purpose of the
                information is for analyzing trends, administering the site,
                tracking users' movement on the website, and gathering
                demographic information. Our Privacy Policy was created with the
                help of the Privacy Policy Generator.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Cookies and Web Beacons
              </h1>
              <p className="fs-4">
                Like any other website, AID MEDIA PVT. LTD. uses "cookies".
                These cookies are used to store information including visitors'
                preferences, and the pages on the website that the visitor
                accessed or visited. The information is used to optimize the
                users' experience by customizing our web page content based on
                visitors' browser type and/or other information.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Google DoubleClick DART Cookie
              </h1>
              <p className="fs-4">
                Google is one of a third-party vendor on our site. It also uses
                cookies, known as DART cookies, to serve ads to our site
                visitors based upon their visit to www.website.com and other
                sites on the internet. However, visitors may choose to decline
                the use of DART cookies by visiting the Google ad and content
                network Privacy Policy at the following URL –
                https://policies.google.com/technologies/ads
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Privacy Policies
              </h1>
              <p className="fs-4">
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of AID MEDIA PVT. LTD.
              </p>
              <p className="fs-4">
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on AID MEDIA
                PVT. LTD., which are sent directly to users' browser. They
                automatically receive your IP address when this occurs. These
                technologies are used to measure the effectiveness of their
                advertising campaigns and/or to personalize the advertising
                content that you see on websites that you visit.
              </p>
              <p className="fs-4">
                Note that AID MEDIA PVT. LTD. Has no access to or control over
                these cookies that are used by third-party advertisers.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Third Party Privacy Policies
              </h1>
              <p className="fs-4">
                AID MEDIA PVT. LTD.'s Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options.
              </p>
              <p className="fs-4">
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites. What Are Cookies?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Children's Information
              </h1>
              <p className="fs-4">
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>
              <p className="fs-4">
                AID MEDIA PVT. LTD. Does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Online Privacy Policy Only
              </h1>
              <p className="fs-4">
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in AID MEDIA PVT.
                LTD.. This policy is not applicable to any information collected
                offline or via channels other than this website.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="fs-1 fw-3" style={{ color: "#201630" }}>
                Consent
              </h1>
              <p className="fs-4">
                By using our website, you hereby consent to our Privacy Policy
                and agree to its Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyPrivacy;
