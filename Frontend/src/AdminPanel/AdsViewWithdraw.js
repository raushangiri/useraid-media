import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdsViewWithdraw = () => {
  const [info, setinfo] = useState({
    customer_id: "",
    taskwallet: "",
  });
  let navigate = useNavigate();

  const AdsWithdraw = async () => {
    try {
      const res = await fetch("/ads-withdraw", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setinfo(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    AdsWithdraw();
  }, []);
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <div className="col-sm-6 mx-auto">
            <h2 className="mb-4">Ads View Withdraw</h2>
            <h5>Transfer Money to Bank</h5>
            <h1>Balance ₹.{`${info.taskwallet}`} </h1>
            <p>
              The amount will be credited in your account the next banking
              working day from 10 am to 5 pm.
            </p>
          </div>

          <div className="col-sm-6 mx-auto">
            <label class="form-label mt-4">
              Select/Enter Amount to be Transfer(Minimum Of ₹200)
            </label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              min="250"
              pattern="[2-9][5-9][0-9]|[1-9][0-9][0-9][0-9]+"
              title="Amount should be minimum of ₹250"
            />
          </div>
          <center className="my-4">
            <button type="submit" class="btn btn-info">
              Submit
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default AdsViewWithdraw;
