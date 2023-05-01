import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const ViewTask = () => {
  let navigate = useNavigate();
  const [info, setinfo] = useState({
    customer_id: "",
  });

  const Mytask = async () => {
    try {
      const res = await fetch("/view-task", {
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
  const { customer_id } = info;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Mytask();

    async function fetchData() {
      try {
        const response = await fetch(`/gettasks/${customer_id}`);
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();

    // eslint-disable-next-line
  }, [customer_id]);

  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Tasks</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">Task </th>
                <th scope="col">View</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {tasks
              ? tasks.map((task, index) => (
                  <Tasklist
                    key={task._id}
                    id={task._id}
                    video_id={task.video_id}
                    taskNumber={index + 1}
                    customer_id={customer_id}
                    videoUrl={task.videoUrl}
                    status={task.status}
                  />
                ))
              : console.log("account not active")}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;

const Tasklist = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playerRef = useRef(null);

  const { video_id, id, taskNumber, customer_id, videoUrl, status } = props;
  const [isCompleted, setIsCompleted] = useState(status);

  console.log(id, "id");
  const opts = {
    width: "100%",
    playerVars: {
      disablekb: 1,
      controls: 1,
    },
  };

  const updateTaskStatus = async () => {
    setIsCompleted("Completed");
    try {
      const response = await fetch(`/taskcompletedhistory/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Completed" }),
      });
      const data = await response.json();
      console.log(data);
      updatewalate();
      // handle success response here
    } catch (error) {
      console.error(error);
      // handle error here
    }
  };

  async function updatewalate() {
    try {
      const response = await fetch(`/walate/${customer_id}`);
      const data = await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <tbody>
        <tr>
          <th className="text-white">Task {taskNumber}</th>
          <td className="text-white">
            {isCompleted === "Pending" ? (
              <button
                type="button"
                className="btn btn-info rounded-pill"
                data-bs-toggle="modal"
                data-bs-target={`#TaskModel_${id}`}
              >
                View
              </button>
            ) : null}

            <div
              className="modal fade"
              id={`TaskModel_${id}`}
              tabIndex="-1"
              aria-labelledby={`TaskModel_${id}_Label`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={`TaskModel_${id}_Label`}>
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <YouTube
                      videoId={video_id}
                      className="col-12"
                      opts={opts}
                      onEnd={updateTaskStatus}
                      containerClassName="video-container"
                      onReady={(event) => {
                        playerRef.current = event.target;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="text-white">
            {isCompleted === "Completed" ? "Completed" : "Pending"}
          </td>
        </tr>
      </tbody>
    </>
  );
};
