import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../src/AID_MEDIA_LOGO.png";
import { MainNavbar } from "./LandingPages/Navbar";

const SignUP = () => {
  let navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [pan_number, setPan_number] = useState("");
  const [referrel_id, setreferrel_id] = useState("");
  const [email_id, setEmail_id] = useState("");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id,
        password,
        name,
        pan_number,
        referrel_id,
        contact_number: phone,
      }),
    });
    await res.json();
    if (res.status === 422) {
      window.alert("please fill all required field");
      console.log("enter information ");
    } else if (res.status === 402) {
      window.alert("User Already Registered");
    } else {
      window.alert("Thank You for Connecting");
      navigate("/sign-in");
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="background">
        <div className="center-box col-sm-6 p-5 ">
          <h4>Sign Up | Aid Media</h4>
          <form
            className="row text-start"
            style={{ fontSize: "2rem" }}
            method="POST"
          >
            <div className="col-sm-6 ">
              {" "}
              <h5 className="form-label float-start mt-3">
                Sponsor Id/Invite Code (Optional)
              </h5>
              <input
                type="text"
                id="SponserID"
                className="form-control"
                name="referrel_id"
                onChange={(e) => setreferrel_id(e.target.value)}
                value={referrel_id}
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <div className="col-sm-6">
              <h5 className="form-label float-start mt-3">Name</h5>
              <input
                type="text"
                id="Name"
                className="form-control"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <div className="col-sm-6">
              <h5 className="form-label float-start mt-3">Phone</h5>
              <input
                type="tel"
                id="Phone"
                className="form-control"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                style={{ fontSize: "1.5rem" }}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="col-sm-6">
              <h5 className="form-label float-start mt-3">Email</h5>
              <input
                type="email"
                id="Email"
                className="form-control"
                name="email_id"
                onChange={(e) => setEmail_id(e.target.value)}
                value={email_id}
                required
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <div className="col-sm-6">
              <h5 className="form-label float-start mt-3">Password</h5>
              <input
                type="password"
                id="psw"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <div className="col-sm-6">
              <h5 className="form-label float-start mt-3">PAN</h5>
              <input
                type="text"
                id="pan"
                className="form-control"
                name="pan_number"
                onChange={(e) => setPan_number(e.target.value)}
                value={pan_number}
                required
                style={{ fontSize: "1.5rem" }}
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                title="Please enter a valid PAN number"
              />
            </div>
            <div className="form-check mt-3 ms-4">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ fontSize: "1.5rem" }}
              />
              <label
                className="form-check-lab  el float-start "
                htmlFor="flexCheckDefault"
                style={{ fontSize: "1.2rem" }}
              >
                I agree with the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              disabled={!isChecked}
              className="btn btn-dark my-4"
              onClick={registerUser}
            >
              Sign Up
            </button>
            <p className="">
              Already have an acount?
              <Link to="/sign-in" className="text-primary">{` Login`}</Link>
            </p>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUP;
