import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "../AdminCSS.css";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);
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

  function toggleSubMenu(menuIndex) {
    setActiveMenu(menuIndex === activeMenu ? null : menuIndex);
  }
  const [SidebarStatus, setSidebarStatus] = useState("SidebarVisible");
  const SidebarBTN = () => {
    if (SidebarStatus === "SidebarVisible") {
      setSidebarStatus("SidebarHide");
    } else {
      setSidebarStatus("SidebarVisible");
    }
  };

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

  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      // Remove user data from local storage
      localStorage.removeItem("user");
      // Clear current user from application state
      // Redirect to login page
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
      navigate("/sign-in");
    }
  };
  useEffect(
    () => {
      Mydashbord();
    }, // eslint-disable-next-line
    []
  );

  return (
    <>
      <div className={`sidebarContainer ${SidebarStatus}`}>
        <div
          className="rounded sidebarBTN text-center bg-dark  "
          onClick={SidebarBTN}
        >
          <h4 className="bi bi-list text-white my-4"></h4>
        </div>
        <div className={`sidebar bg-dark `}>
          <center className="my-3">
            <i
              className="bi bi-person-circle "
              style={{ fontSize: "20px" }}
            ></i>
            <h5 className="text-warning ">{data1.name}</h5>
            <p className="text-warning ">{`AM00${data1.customer_id}`}</p>
          </center>

          <ul>
            <li className="menu-item active">
              <Link to="/dashboard">
                <i className="bi bi-box"></i>Dashboard
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/profile" onClick={() => toggleSubMenu(0)}>
                <i className="bi bi-person-square"></i>Profile{" "}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="#" onClick={() => toggleSubMenu(1)}>
                <i className="bi bi-people"></i>Team{" "}
                {activeMenu === 1 ? "-" : "+"}
              </Link>
              <ul className={activeMenu === 1 ? "sub-menu open" : "sub-menu"}>
                <li>
                  <Link to="/direct-team">
                    <i className="bi bi-caret-right"></i>Direct Team
                  </Link>
                </li>
                <li>
                  <Link to="/level-team">
                    <i className="bi bi-caret-right"></i>Level Team
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" onClick={() => toggleSubMenu(2)}>
                <i className="bi bi-dice-4"></i>Task{" "}
                {activeMenu === 2 ? "-" : "+"}
              </Link>
              <ul className={activeMenu === 2 ? "sub-menu open" : "sub-menu"}>
                <li>
                  <Link to="/view-task">
                    <i className="bi bi-caret-right"></i>View Task
                  </Link>
                </li>
                <li>
                  <Link to="/task-history">
                    <i className="bi bi-caret-right"></i>History
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" onClick={() => toggleSubMenu(3)}>
                <i className="bi bi-coin"></i>Deposit{" "}
                {activeMenu === 3 ? "-" : "+"}
              </Link>
              <ul className={activeMenu === 3 ? "sub-menu open" : "sub-menu"}>
                <li>
                  <Link to="/scan-pay">
                    <i className="bi bi-caret-right"></i>Scan & Pay
                  </Link>
                </li>
                <li>
                  <Link to="/payment-history" className="d-flex">
                    <i className="bi bi-caret-right mt-2"></i>{" "}
                    <span className="fs-3 ">Payment / Deposit History</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" onClick={() => toggleSubMenu(5)}>
                <i className="bi bi-question-octagon"></i>Support{" "}
                {activeMenu === 5 ? "-" : "+"}
              </Link>
              <ul className={activeMenu === 5 ? "sub-menu open" : "sub-menu"}>
                <li>
                  <Link to="/support">
                    <i className="bi bi-caret-right"></i>Support
                  </Link>
                </li>
                <li>
                  <Link to="/support-history">
                    <i className="bi bi-caret-right"></i>Support History
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <Link to="#" onClick={() => toggleSubMenu(7)}>
                <i className="bi bi-wallet2"></i> Withdraw{" "}
                {activeMenu === 7 ? "-" : "+"}
              </Link>
              <ul className={activeMenu === 7 ? "sub-menu open" : "sub-menu"}>
                <li>
                  <Link to="/direct-withdraw">
                    <i className="bi bi-caret-right"></i>Direct withdraw
                  </Link>
                </li>
                <li>
                  <Link to="/ads-view-withdraw">
                    <i className="bi bi-caret-right"></i>Ads view withdraw
                  </Link>
                </li>

                <li>
                  <Link to="/withdraw-history">
                    <i className="bi bi-caret-right"></i>Withdraw history
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/refer">
                <i className="bi bi-share-fill"></i>Refers
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={logout}>
                <i className="bi bi-box-arrow-left"></i>Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
