import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QRcode from "./Assets/QRcode.jpeg";

const ScanPay = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [transactionID, settransactionID] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  let navigate = useNavigate();

  const Dipositpay = async () => {
    try {
      const res = await fetch("/dipositpay", {
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

  const postimage = async () => {
    const data1 = new FormData();
    data1.append("file", image);
    data1.append("upload_preset", "Payment-screenshot");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkcrikbxc/upload",
        {
          method: "post",
          body: data1,
        }
      );
      const data = await res.json();
      setUrl(data.url);
      return data.url;
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const diposit = async (e) => {
    e.preventDefault();
    console.log(url, "url");
    if (!image) {
      return window.alert("Kindly attach screenshot");
    }
    setIsSubmitting(true); // disable the button

    const uploadedUrl = await postimage();
    const { customer_id, account_status } = data1;
    const res = await fetch("/diposit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id,
        transaction_id: transactionID,
        account_status,
        qr_code_screenshot: uploadedUrl,
      }),
    });
    await res.json();
    setIsSubmitting(false); // re-enable the button
    if (res.status === 200) {
      window.alert(
        "Thank you! Your account will be activated within next 2 hours"
      );
      navigate("/dashboard");
    } else {
      window.alert("Enter Transaction ID");
    }
  };

  console.log(url);
  useEffect(
    () => {
      Dipositpay();
    }, // eslint-disable-next-line
    []
  );
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Scan & Pay</h2>
          <h5>Deposite & Send Sceenshots</h5>
          <div className="col-sm-3 mx-auto">
            <img src={QRcode} className=" w-100 h-auto my-5" alt=" QR Code " />
          </div>
          <div className="col-sm-6 mx-auto">
            <label class="form-label">UTR/TRANSECTION ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Transaction Number"
              name="transactionID"
              onChange={(e) => settransactionID(e.target.value)}
              value={transactionID}
            />
          </div>
          <div className="col-sm-6 mx-auto">
            <label class="form-label mt-4">SCREENSHOT</label>
            <input
              type="file"
              className="form-control"
              placeholder=""
              name="paymentscreenshot"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {!image.name ? (
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Upload File
              </label>
            ) : (
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                {image.name}
              </label>
            )}
          </div>
          <center className="my-4">
            <button
              type="submit"
              class="btn btn-info"
              onClick={diposit}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ScanPay;
