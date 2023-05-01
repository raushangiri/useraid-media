import React, { useState, useEffect } from "react";
// import QRcode from "./Assets/QRcode.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [data1, setData] = useState({
    _id: "",
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

  const viewprofileAuth = async () => {
    try {
      const res = await fetch("/profile", {
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

  const { name, email_id, contact_number, password, _id, qr_code_screenshot } =
    data1;

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
      toast.success("Image uploaded successfully!");
      return data.url;
    } catch (err) {
      console.error("Error:", err);
      toast.error("Error uploading image.");
    }
  };

  const updateUserQRCode = async (e) => {
    e.preventDefault();
    if (!image) {
      return window.alert("Kindly attach screenshot");
    }
    setIsSubmitting(true); // disable the button
    const uploadedUrl = await postimage();
    try {
      const response = await fetch(`/Userqrcode/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qr_code_screenshot: uploadedUrl }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return { error: "Server error" };
    }
  };
  // async function handleUpdateUserQRCode(_id, qrCodeScreenshot) {
  //   const response = await updateUserQRCode(_id, qrCodeScreenshot);
  //   if (response.error) {
  //     console.log(response.error);
  //   } else {
  //     console.log("Id updated");
  //   }
  // }

  useEffect(() => {
    viewprofileAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="AdminContainer">
      <ToastContainer />

      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-4 metalic-color ">
          <div className="col-sm-6 mx-auto my-5">
            <div className="row mx-0 px-0">
              <h2 className="mx-auto">Profile</h2>
              <h5 className="mb-4">View & Edit Profile</h5>

              <form>
                <label className=" my-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control bg-transparent border border-info text-info"
                  value={name}
                  disabled
                />
                <label className=" my-2">Phone Number</label>
                <input
                  type="text"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  value={contact_number}
                  className="form-control bg-transparent border border-info text-info"
                  disabled
                />
                <label className=" my-2">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email_id}
                  className="form-control bg-transparent border border-info text-info"
                  disabled
                />
                <label className=" my-2">password</label>
                <input
                  type="text"
                  id="psw"
                  name="psw"
                  value={password}
                  className="form-control bg-transparent border border-info text-info"
                  disabled
                />

                <label className="col-12 my-3 mt-4">
                  Google Pay/ Phone Pe/ PayTm QR Code
                </label>
                <div className="col-sm-12">
                  {" "}
                  <img
                    src={qr_code_screenshot}
                    className="col-sm-2 h-auto"
                    alt=" QR Code will be here "
                  />
                </div>
                <label className="col-12 my-2">Upload ScreenShot </label>
                <input
                  type="file"
                  id="ScreenShot"
                  name="profile-qr-code"
                  className="form-control bg-transparent border border-info text-info"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {!image.name ? (
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  ></label>
                ) : (
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    {image.name}
                  </label>
                )}

                <button
                  type="submit"
                  className="btn btn-info mt-3"
                  onClick={updateUserQRCode}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
