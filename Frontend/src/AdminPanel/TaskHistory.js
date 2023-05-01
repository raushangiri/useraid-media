import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TaskHistory = () => {
  let navigate = useNavigate();

  const [data1, setData] = useState({
    customer_id: "",
  });

  const taskhistory = async () => {
    try {
      const res = await fetch("/task-history", {
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

  const [historydata, sethistorydata] = useState([]);

  async function getTaskHistory(customer_id) {
    try {
      const response = await fetch(`/gettaskhistory/${customer_id}`);
      const data = await response.json();
      sethistorydata(data);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  useEffect(() => {
    taskhistory();

    getTaskHistory(customer_id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer_id]);
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Task History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">User Id </th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>

            {historydata.map((item) => {
              return (
                <TaskHistorylist
                  customer_id={item.customer_id}
                  status={item.status}
                  date={item.completedAt}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskHistory;

function TaskHistorylist(props) {
  const { customer_id, status, date } = props;

  const timestamp = 1620243365123; // example timestamp
  const newdate = new Date(date);

  const year = newdate.getFullYear();
  const month = newdate.getMonth() + 1; // Note that month is 0-indexed, so we add 1
  const day = newdate.getDate();
  console.log(customer_id, "customer_id");
  return (
    <>
      <tbody>
        <tr>
          <td className="text-white">{customer_id}</td>
          <td className="text-white">{`${day}-${month}-${year}`}</td>
          <td className="text-white">{status}</td>
        </tr>
      </tbody>
    </>
  );
}
