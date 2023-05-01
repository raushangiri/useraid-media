import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SupportHistory = () => {
  let navigate = useNavigate();

  const SupportHistory = async () => {
    try {
      const res = await fetch("/supporthistory", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      await res.json();
      // setData(data);
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
      SupportHistory();
    }, // eslint-disable-next-line
    []
  );
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Support History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject </th>
                <th scope="col">Inquiry</th>
                <th scope="col">Date</th>
                <th scope="col">Reply</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">Balance Enquiry</td>
                <td className="text-white">Here will be textarea text</td>
                <td className="text-white">12-03-2023</td>
                <td className="text-white">Here will be reply</td>
                <td className="text-white">Resolved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportHistory;
