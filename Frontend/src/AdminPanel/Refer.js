import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Refer = () => {
  const inputRef = React.useRef(null);
  const [data1, setData] = useState({
    customer_id: "",
  });

  function handleCopy() {
    inputRef.current.select();
    document.execCommand("copy");
  }

  let navigate = useNavigate();

  const referrel = async () => {
    try {
      const res = await fetch("/refer", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      await res.json();
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
      referrel();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <div className="col-sm-6 mx-auto">
            <h2 className="mb-4">Refer </h2>
            <label class="form-label">copy code and share</label>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text to copy"
                value={data1.customer_id}
                ref={inputRef}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleCopy}
                >
                  <i className="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
