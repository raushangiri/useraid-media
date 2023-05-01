import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DirectTeamlist from "./DirectTeamlist";

const DirectTeam = () => {
  let navigate = useNavigate();
  const [teamList, setteamList] = useState(null);
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

  const { customer_id } = data1;
  const viewDirectTeam = async () => {
    try {
      const res = await fetch("/direct-team", {
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

  const listdata = async () => {
    try {
      const res = await fetch(`/directReferrel/${customer_id}`);
      const data = await res.json();
      setteamList(data.level1user);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      viewDirectTeam();
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
          <h2 className="mb-4">Direct Team</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">Sponsor Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Name</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {teamList
              ? teamList.map((data) => {
                  return (
                    <DirectTeamlist
                      key={data._id}
                      referrel_id={data.referrel_id}
                      name={data.name}
                      userid={data.customer_id}
                      account_status={data.account_status}
                      createdAt={data.createdAt}
                    />
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DirectTeam;
