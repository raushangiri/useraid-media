import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../src/AID_MEDIA_LOGO.png";
import { MainNavbar } from "./LandingPages/Navbar";

const SignIn = () => {
  let navigate = useNavigate();

  const [contact_number, setContact_number] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact_number,
        password,
      }),
    });
    await res.json();
    if (res.status === 200) {
      navigate("/dashboard");
    } else if (!contact_number) {
      window.alert("Enter your email address");
      console.log("enter information ");
    } else if (!password) {
      window.alert("Enter your password");
      console.log("enter information ");
    } else {
      window.alert("Invalid credentrial");
      navigate("/");
      setPassword("");
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="background">
        <div className="center-box col-sm-3 p-5 ">
          <h1 className="my-4">
            <img
              src={LOGO}
              className="ms-4 h-auto"
              width={70}
              alt=" AID Media "
            />
          </h1>
          <h4>Sign In | Aid Media</h4>
          <form method="POST">
            <h5
              htmlFor="UserID"
              className="form-label float-start mt-4"
              style={{ fontSize: "2rem" }}
            >
              Contact Number:
            </h5>
            <input
              type="text"
              id="UserID"
              className="form-control"
              name="contact_number"
              style={{ fontSize: "2rem" }}
              onChange={(e) => setContact_number(e.target.value)}
              value={contact_number}
              required
            />
            <h5
              htmlFor="psw"
              className="form-label float-start mt-3"
              style={{ fontSize: "2rem" }}
            >
              Password:
            </h5>
            <input
              type="password"
              className="form-control"
              id="psw"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              style={{ fontSize: "2rem" }}
            />
            <button
              onClick={loginUser}
              type="submit"
              className="form-control btn btn-dark my-5"
            >
              <h3>Sign In</h3>
            </button>
            <p className="fs-3">
              Don't have an account?
              <Link
                to="/sign-up"
                className="text-primary"
              >{` Click here`}</Link>
            </p>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
