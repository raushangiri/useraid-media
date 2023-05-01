import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminCSS.css";
const Dashboard = () => {
  const [data1, setData] = useState({
    customer_id: "",
    referrel_id: "",
    name: "",
    email_id: "",
    contact_number: "",
    taskwallet: "",
    referrelwallet: "",
    Totalwallet: "",
    account_status: "",
    pan_number: "",
    qr_code_screenshot: "",
  });

  let navigate = useNavigate();

  const Mydashbord = async () => {
    try {
      const res = await fetch("/Dashboard", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/sign-in");
    }
  };
  useEffect(
    () => {
      Mydashbord();
    }, // eslint-disable-next-line
    [data1]
  );

  return (
    <div className="AdminContainer">
      <div className="row mx-0 px-0">
        <marquee
          className="bg-dark text-warning p-3 fs-3"
          direction="left"
          behavior="scroll"
          scrollamount="5"
        >
          आप सभी का जिसने पेआउट रिक्वेस्ट लगाया था उन सभी का पेआउट क्लियर हो
          चूका है | धन्यवाद (Aid Media Team)
        </marquee>
      </div>
      <div className="row mx-0 p-4">
        <div className="col-sm-12 text-center p-4 border border-warning  ">
          <h3>Member Details</h3>
          <h5 className="text-warning">{data1.name}</h5>
          <h5 className="text-warning">AM00{data1.customer_id}</h5>
          {data1.account_status === "Active" ? (
            <span className="activeTag fs-3">{data1.account_status}</span>
          ) : (
            <span className="inactiveTag fs-3">{data1.account_status}</span>
          )}
        </div>
        <div className="col-sm-6"></div>
      </div>
      <div className="row mx-0 p-4">
        <div className="col-sm-12 p-4 metalic-color rounded text-light">
          <div className="row mx-0 px-0">
            <div className="col-sm-4 my-3 text-center">
              <a href="#" className="DashIconBox">
                <i className="bi bi-view-list DashIcon "></i>
                <p className="DashIconText">Report</p>
              </a>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <a href="#" className="DashIconBox">
                <i className="bi bi-people DashIcon "></i>
                <p className="DashIconText">Team</p>
              </a>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <a href="#" className="DashIconBox">
                <i className="bi bi-dice-4 DashIcon "></i>
                <p className="DashIconText">Task</p>
              </a>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <a href="#" className="DashIconBox">
                <i className="bi bi-coin DashIcon "></i>
                <p className="DashIconText">Pay</p>
              </a>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <a href="#" className="DashIconBox">
                <i className="bi bi-wallet2 DashIcon "></i>
                <p className="DashIconText">Payout</p>
              </a>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <a href="#" className="DashIconBox">
                <i className="bi bi-tag DashIcon "></i>
                <p className="DashIconText">E-pin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 p-3">
        <div className="col-sm-3 col-md-4 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4">
            <h5>Total Directs</h5>
            <h1>0</h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-4 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4">
            <h5>Active Directs</h5>
            <h1>0</h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-4 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4">
            <h5>Inactive Direct</h5>
            <h1>
              0 <i className="bi bi-currency-rupee"></i>
            </h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-4 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4">
            <h5>Total Income</h5>
            <h1>
              {`${data1.Totalwallet}`} <i className="bi bi-currency-rupee"></i>
            </h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-4 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4">
            <h5>Task Income</h5>
            <h1>
              {`${data1.taskwallet}`} <i className="bi bi-currency-rupee"></i>
            </h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-4 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4">
            <h5>referrel Income</h5>
            <h1>
              {`${data1.referrelwallet}`}{" "}
              <i className="bi bi-currency-rupee"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
