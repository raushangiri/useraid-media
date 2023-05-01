import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentscreenshot from "./Assets/paymentSS.webp";

const PaymentHistory = () => {
  const [data1, setData] = useState({
    customer_id: "",
    referrel_id: "",
    name: "",
    email_id: "",
    contact_number: "",
    password: "",
    account_status: "",
    pan_number: "",
    qr_code_screenshot: "",
  });
  const [data, setdata] = useState();
  // {
  //   transaction_id: "",
  //   account_status: "",
  //   qr_code_screenshot: "",
  //   createdAt: "",
  // }
  let navigate = useNavigate();

  const diposithistory = async () => {
    try {
      const res = await fetch("/diposithistory", {
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

  const { customer_id } = data1;
  const listdata = async () => {
    try {
      const res = await fetch(`/diposithistory/${customer_id}`);
      const data = await res.json();
      setdata(data.diposithistory);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [depositHistory, setDepositHistory] = useState([]);
  if (depositHistory) {
    depositHistory.map((item) => {
      return console.log(item);
    });
  }

  // const { transaction_id, account_status, qr_code_screenshot, createdAt } =
  //   data;
  // console.log(data);
  useEffect(
    () => {
      diposithistory();
      const fetchDepositHistory = async () => {
        try {
          const response = await fetch(`/diposithistory/${customer_id}`);
          const data = await response.json();
          setDepositHistory(data.diposithistory);
        } catch (error) {
          console.log(error);
        }
      };

      fetchDepositHistory();
      if (customer_id) {
        listdata();
      }
    }, // eslint-disable-next-line
    [customer_id]
  );
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Payment History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Image </th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {depositHistory
              ? depositHistory.map((item) => {
                  return (
                    <tbody>
                      <tr>
                        <td scope="row px-0 mx-0" className="text-white">
                          {item.customer_id}
                        </td>
                        <td className="text-white">
                          <img
                            src={item.qr_code_screenshot}
                            className=""
                            height="300px"
                            alt=" ... "
                          />
                        </td>
                        <td className="text-white">{item.transaction_id}</td>

                        <td className="text-white">{item.account_status}</td>
                      </tr>
                    </tbody>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
